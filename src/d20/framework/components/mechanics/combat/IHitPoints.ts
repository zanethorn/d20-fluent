/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-30T21:39:47-04:00
 * @Project: d20-fluent
 * @Filename: IHitPoints.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T21:42:43-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IScore } from "../IScore";
import { IHasModifiers } from "../IHasModifiers";

export interface IHitPoints
    extends IScore, IHasModifiers
{

}
