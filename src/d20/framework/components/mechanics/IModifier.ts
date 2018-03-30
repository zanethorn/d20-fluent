/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T18:59:48-04:00
 * @Project: d20-fluent
 * @Filename: IModifer.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T16:27:43-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IHasValue } from '../../IHasValue'
import { IHasReadonlyValue } from '../../IHasReadonlyValue'
import { IHasType } from '../../IHasType'
import { IModifierType } from './IModifierType'

declare module './IScore' {
    export interface IScore
    {

    }
}

import  { IScore } from './IScore';
import { StackedModifier } from './StackedModifier';

export interface IModifier
    extends IHasReadonlyValue, IHasType<ModifierType>
{
    appliesTo(score:IScore): boolean;
}

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
