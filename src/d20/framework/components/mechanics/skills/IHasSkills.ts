/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T22:36:16-04:00
 * @Project: d20-fluent
 * @Filename: IHasSkills.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T20:18:34-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IHasScores } from "../IHasScores";
import { ISkill } from "./ISkill";
import { SkillType } from "./SkillType";

export interface IHasSkills
    extends IHasScores
{
    readonly skills: IterableIterator<ISkill>;

    getSkill(type: SkillType): ISkill;
    addSkillRanks(type: SkillType, ranks: number): ISkill;
}
