/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-30T11:49:50-04:00
 * @Project: d20-fluent
 * @Filename: StackedModifier.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T23:25:32-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IModifier } from './IModifier';
import { ModifierType } from './ModifierType';
import { IScore } from './IScore';

export class StackedModifier
    implements IModifier
{
    private readonly _modifiers: IModifier[];

    get value(): number {
        let t = 0;
        for (let m of this._modifiers){
            t += m.value;
        }
        return t;
    }

    get type(): ModifierType {
        return this._modifiers[0].type;
    }

    constructor(...modifiers: IModifier[]){
        this._modifiers = modifiers;
    }

    appliesTo(score:IScore): boolean{
        for (let m of this._modifiers){
            if (!m.appliesTo(score)) {
                return false;
            }
        }
        return true;
    }
}
