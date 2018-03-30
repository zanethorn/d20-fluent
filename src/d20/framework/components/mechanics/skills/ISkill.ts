/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T22:34:30-04:00
 * @Project: d20-fluent
 * @Filename: ISkill.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-29T22:35:12-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IScore } from "../IScore";
import { IHasType } from "../../../IHasType";
import { ISkillType } from "./ISkillType";

export interface ISkill
    extends IScore, IHasType<ISkillType>
{

}
