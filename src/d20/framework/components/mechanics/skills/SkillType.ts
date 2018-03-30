/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T22:40:25-04:00
 * @Project: d20-fluent
 * @Filename: SkillType.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T10:20:32-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { ISkillType } from "./ISkillType";
import { AbilityScoreType } from "../abilityscores";

export class SkillType implements ISkillType {
    description: string;

    constructor (
        public readonly id: string,
        public readonly type: AbilityScoreType,
        public readonly useUntrained: boolean
    ){

    }
}
