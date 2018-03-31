/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-30T22:51:53-04:00
 * @Project: d20-fluent
 * @Filename: Score.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T23:41:14-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IHasScores } from "./IHasScores";
import { IScore } from "./IScore";
import { IModifier } from "./IModifier";
import { CheckResult } from "./CheckResult";
import { roll } from "../../DieRoll";
import { ICheckResult } from "./ICheckResult";
import { Die } from "../../Die";
import { StackedModifier } from "./StackedModifier";
import { ArrayList } from "../../collections";

function combinePenalties(mod:IModifier, penalties: any):void {
    if (penalties[mod.type.id] === undefined) {
        penalties[mod.type.id] = mod;
    }
    else if (mod.type.canStack) {
        penalties[mod.type.id] = new StackedModifier(penalties[mod.type.id], mod);
    }
    else if (penalties[mod.type.id] > mod.value){
        penalties[mod.type.id] = mod;
    }
}

function combineBonuses(mod:IModifier, bonuses: any):void {
    if (bonuses[mod.type.id] === undefined) {
        bonuses[mod.type.id] = mod;
    }
    else if (mod.type.canStack) {
        bonuses[mod.type.id] = new StackedModifier(bonuses[mod.type.id], mod);
    }
    else if (bonuses[mod.type.id] < mod.value){
        bonuses[mod.type.id] = mod;
    }
}

export function *combineModifiers(mods: IterableIterator<IModifier>): IterableIterator<IModifier> {
    let bonuses: any = {};
    let penalties: any = {};

    for (let m of mods) {
        if (m.value < 0){
            combinePenalties(m, penalties);
        }
        else {
            combineBonuses(m, bonuses);
        }
    }

    for (let m of bonuses){
        yield m;
    }

    for (let m of penalties) {
        yield m;
    }
}

export abstract class Score
    implements IScore
{
    private static _typeNames: ArrayList<string> = new ArrayList<string>();

    description: string;
    value: number;

    constructor(
        public readonly id:string,
        public readonly parent: IHasScores
    ) {
        Score._typeNames.add(id);
    }

    get modifiers(): IterableIterator<IModifier> {
        let self = this;
        function *_appliedModifiers() {
            for (let m of self.parent.modifiers){
                if (m.appliesTo(self)){
                    yield m;
                }
            }
        }
        return combineModifiers(_appliedModifiers());
    }

    get modifiedValue(): number {
        let t = this.value;
        for (let m of this.modifiers) {
            t += m.value;
        }
        return t;
    }

    check(dc: number, ...modifiers:IModifier[]): ICheckResult {

        let self = this;
        function *_mergeModifiers(){
            for (let m of self.modifiers){
                yield m;
            }
            for (let m of modifiers){
                yield m;
            }
        }

        let mods = Array.from(combineModifiers(_mergeModifiers()));

        return new CheckResult(this, roll(1,Die.d20)(), dc, mods);
    }

    static get typeNames(): IterableIterator<string> {
        return Score._typeNames[Symbol.iterator]();
    }
}
