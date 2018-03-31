/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T22:34:30-04:00
 * @Project: d20-fluent
 * @Filename: ISkill.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T23:27:22-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IScore } from "../IScore";
import { IHasType } from "../../../IHasType";
import { SkillType } from "./SkillType";

export interface ISkill
    extends IScore, IHasType<SkillType>
{

}
