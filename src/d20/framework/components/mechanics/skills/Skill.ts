/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T22:42:38-04:00
 * @Project: d20-fluent
 * @Filename: Skill.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T17:07:56-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { Score } from "../Score";
import { ISkill } from "./ISkill";
import { IHasSkills } from "./IHasSkills";
import { SkillType } from "./SkillType";

class Skill
    extends Score
    implements ISkill
{
    constructor(
        public readonly type: SkillType,
        public readonly parent: IHasSkills
    ) {
        super(type.id, parent);
    }
}

export function 
