/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T22:42:38-04:00
 * @Project: d20-fluent
 * @Filename: Skill.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T20:46:39-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { Score } from "../Score";
import { ISkill } from "./ISkill";
import { IHasSkills } from "./IHasSkills";
import { SkillType } from "./SkillType";
import { Constructor } from "../../../Constructor";
import { IHasScores } from "../IHasScores";
import { ArrayList } from "../../../collections";

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


export function HasSkillsMixin<TBase extends Constructor<IHasScores>>(Base: TBase): TBase & Constructor<IHasSkills> {
    return class extends Base implements IHasSkills
    {
        private _skills: ArrayList<ISkill> = new ArrayList<ISkill>();

        get skills(): IterableIterator<ISkill> {
            return this._skills[Symbol.iterator]();
        }

        getSkill(type: SkillType): ISkill {
            let skill:ISkill = null;
            for (let s of this._skills) {
                skill = s;
                break;
            }

            if (skill === undefined) {
                if (type.useUntrained){
                    skill = new Skill(type, this);
                    this._skills.add(skill);
                }
            }

            return skill;
        }
        addSkillRanks(type: SkillType, ranks: number): ISkill {
            throw new Error("Method not implemented.");
        }
    };
}
