/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T22:30:27-04:00
 * @Project: d20-fluent
 * @Filename: ISkillType.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T10:19:55-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { AbilityScoreType } from "../abilityscores";
import { IComponent } from "../..";
import { IHasType } from "../../../IHasType";

export interface ISkillType
    extends IComponent, IHasType<AbilityScoreType>
{
    readonly useUntrained: boolean;
}
