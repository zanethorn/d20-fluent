/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-26T08:23:45-04:00
 * @Project: d20-fluent
 * @Filename: modifiers.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-26T13:25:23-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

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
    // extends ObjectConstructor
    //     .withReadonlyType<ModifierType>()
    //     .withReadonlyValue()
    // implements IModifier
{
    constructor(value: number,type: ModifierType = ModifierType.base, public readonly stackable: boolean = false) {
        //super(value, type);
    }
}
