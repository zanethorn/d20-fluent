/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-26T08:23:45-04:00
 * @Project: d20-fluent
 * @Filename: modifiers.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-26T15:09:54-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { Constructor } from "./mixins"
import { HasValue, HasReadonlyType, IHasValue, IHasType } from "./_core"

export enum ModifierType
{
    base = 0,
    ability = 1,
    alchemical,
    armor,
    circumstance,
    competence,
    deflection,
    dodge,
    enchantment,
    insight,
    luck,
    morale,
    natural_armor,
    profane,
    racial,
    resistance,
    sacred,
    shield,
    size
}

export interface IModifier
    extends IHasValue, IHasType<ModifierType>
{
    readonly stackable: boolean;
}

export interface IHasModifiers
{
    modifiers(): Iterator<IModifier>;
    addModifier(modifier:IModifier): void;
    removeModifier(modifier:IModifier): void;
}

export interface IHasModifiedValue
    extends IHasModifiers, IHasValue
{
    readonly modifiedValue: number;
}

export class Modifier
    extends HasValue(HasReadonlyType<ModifierType>( Object ))
    implements IModifier
{
    constructor(value: number, type:ModifierType, public readonly stackable=false){
        super(value, type);
    }
}

export function HasModifiers<TBase extends Constructor>(Base: TBase): Constructor<IHasModifiers> & TBase {
    return class extends Base implements IHasModifiers {

        private readonly _modifiers: IModifier[] = [];

        modifiers(): Iterator<IModifier> {
            return this._modifiers[Symbol.iterator];
        }
        addModifier(modifier:IModifier): void {
            if (_modifiers.indexOf(modifier) === -1) {
                _modifiers.push(modifier);
            }
        }
        removeModifier(modifier:IModifier): void {
            let ix = _modifiers.indexOf(modifier);
            if (ix !== -1) {
                _modifiers.splice(ix,1);
            }
        }
    };
}

export function HasModifiedValue<TBase extends Constructor>(Base: TBase): Constructor<IHasModifiedValue> & TBase {
    return class extends HasModifiers(HasValue(Base)) implements IHasModifiedValue {
        get modifiedValue(): number {
            let v = this.value;
            for (let m of this.modifiers) {
                v += m.value;
            }
            return v;
        }
    };
}
