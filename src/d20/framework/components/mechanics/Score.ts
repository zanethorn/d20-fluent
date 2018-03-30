/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T20:51:02-04:00
 * @Project: d20-fluent
 * @Filename: Score.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T18:25:17-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IScore } from "./IScore";
import { IModifier, combineModifiers } from "./IModifier";
import { IHasScores } from './IHasScores';
import { roll } from "../../DieRoll";
import { Die } from "../../Die";
import { CheckResult } from "./CheckResult";
import { ICheckResult } from "./ICheckResult";
import { Constructor } from "../../Constructor";

export abstract class Score
    implements IScore
{
    description: string;
    value: number;

    constructor(public readonly id:string, public readonly parent: IHasScores) { }

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

}


export function HasScoresMixin<TBase extends Constructor>(Base: TBase) {
    return class extends Base
    {
        get scores(): IterableIterator<IScore> {
            let self = <any>this;
            function *_scores() {
                for (let k in self) {
                    let v = self[k];
                    if (v.id !== undefined) {
                        yield v;
                    }
                }
            }
            return _scores();
        }

        getScore(id:string): IScore;

    };
}
