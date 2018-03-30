/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T19:24:54-04:00
 * @Project: d20-fluent
 * @Filename: AbilityScoreType.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T16:43:15-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IComponent } from "../../IComponent";

export class AbilityScoreType
    implements IComponent
{
    private static readonly _types: AbilityScoreType[] = [];

    description: string;

    constructor(public readonly id: string) {
        AbilityScoreType._types.push(this);
    }

    static readonly strength:AbilityScoreType = new AbilityScoreType("strength");
    static readonly dexterity:AbilityScoreType = new AbilityScoreType("dexterity");
    static readonly constitution:AbilityScoreType = new AbilityScoreType("constitution");
    static readonly intelligence:AbilityScoreType = new AbilityScoreType("intelligence");
    static readonly wisdom:AbilityScoreType = new AbilityScoreType("wisdom");
    static readonly charisma:AbilityScoreType = new AbilityScoreType("charisma");

    static get types(): IterableIterator<AbilityScoreType> {
        return this._types[Symbol.iterator]();
    }
}
