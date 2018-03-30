/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T19:30:07-04:00
 * @Project: d20-fluent
 * @Filename: ModifierType.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T16:38:34-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IComponent } from "../IComponent";

export class ModifierType
    implements IComponent
{

    private static readonly _types: ModifierType[] = [];

    description: string;

    constructor(public readonly id: string, public readonly canStack: boolean) {
        ModifierType._types.push(this);
    }

    static readonly ability: ModifierType = new ModifierType('ability', false);
    static readonly alchemical: ModifierType = new ModifierType('alchemical', false);
    static readonly armor: ModifierType = new ModifierType('armor', false);
    static readonly circumstance: ModifierType = new ModifierType('circumstance', false);
    static readonly competence: ModifierType = new ModifierType('competence', false);
    static readonly deflection: ModifierType = new ModifierType('deflection', false);
    static readonly dodge: ModifierType = new ModifierType('dodge', false);
    static readonly enchantment: ModifierType = new ModifierType('enchantment', false);
    static readonly insight: ModifierType = new ModifierType('insight', false);
    static readonly luck: ModifierType = new ModifierType('luck', false);
    static readonly morale: ModifierType = new ModifierType('morale', false);
    static readonly natural_armor: ModifierType = new ModifierType('natural_armor', false);
    static readonly profane: ModifierType = new ModifierType('profane', false);
    static readonly racial: ModifierType = new ModifierType('racial', false);
    static readonly resistance: ModifierType = new ModifierType('resistance', false);
    static readonly sacred: ModifierType = new ModifierType('sacred', false);
    static readonly shield: ModifierType = new ModifierType('shield', false);
    static readonly size: ModifierType = new ModifierType('size', false);

    static get types(): IterableIterator<ModifierType> {
        return this._types[Symbol.iterator]();
    }
}
