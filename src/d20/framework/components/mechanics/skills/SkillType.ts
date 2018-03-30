/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T22:40:25-04:00
 * @Project: d20-fluent
 * @Filename: SkillType.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T17:06:19-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { AbilityScoreType } from "../abilityscores";
import { IComponent } from "../../IComponent";

export class SkillType
    implements IComponent
{
    private static readonly _types: SkillType[] = [];

    description: string;

    constructor (
        public readonly id: string,
        public readonly abilityScore: AbilityScoreType,
        public readonly useUntrained: boolean
    ){
        SkillType._types.push(this);
    }

    static get types(): IterableIterator<SkillType> {
        return this._types[Symbol.iterator]();
    }
}
