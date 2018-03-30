/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T22:20:10-04:00
 * @Project: d20-fluent
 * @Filename: SavingThrowType.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T16:46:54-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IComponent } from "../../IComponent";
import { AbilityScoreType } from "../abilityscores";

export class SavingThrowType
    implements IComponent
{
    private static readonly _types: SavingThrowType[] = [];

    description: string;

    constructor(
        public readonly id: string,
        public readonly abilityScore: AbilityScoreType
    ) {
        SavingThrowType._types.push(this);
    }

    static readonly fortitude:SavingThrowType = new SavingThrowType("fortitude", AbilityScoreType.constitution);
    static readonly reflex:SavingThrowType = new SavingThrowType("reflex", AbilityScoreType.dexterity);
    static readonly will:SavingThrowType = new SavingThrowType("will", AbilityScoreType.wisdom);

    static get types(): IterableIterator<SavingThrowType> {
        return this._types[Symbol.iterator]();
    }
}
