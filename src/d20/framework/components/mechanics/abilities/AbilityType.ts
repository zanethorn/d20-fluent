/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-30T10:43:11-04:00
 * @Project: d20-fluent
 * @Filename: AbilityType.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T18:32:46-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

export class AbilityType
    implements IComponent
{
    private static readonly _types: AbilityType[] = [];

    description: string;

    constructor(public readonly id: string) {
        AbilityType._types.push(this);
    }

    static readonly natural = new AbilityType("natural");
    static readonly extraordinary = new AbilityType("extraordinary");
    static readonly spell_like = new AbilityType("spell_like");
    static readonly supernatural = new AbilityType("supernatural");

    static get types(): IterableIterator<AbilityType> {
        return this._types[Symbol.iterator]();
    }
}
