/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T22:42:38-04:00
 * @Project: d20-fluent
 * @Filename: Skill.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-29T22:45:43-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { Score } from "../Score";
import { ISkill } from "./ISkill";
import { ISkillType } from "./ISkillType";
import { IHasSkills } from "./IHasSkills";

export class Skill extends Score implements ISkill {
    constructor(public readonly type: ISkillType, parent: IHasSkills) {
        super(type.id, parent);
    }
}
