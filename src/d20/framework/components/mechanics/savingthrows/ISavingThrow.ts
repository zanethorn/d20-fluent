/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T22:21:29-04:00
 * @Project: d20-fluent
 * @Filename: ISavingThrow.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-29T22:22:29-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IHasType } from "../../../IHasType";
import { SavingThrowType } from "./SavingThrowType";
import { IScore } from "../IScore";


export interface ISavingThrow
    extends IScore, IHasType<SavingThrowType>
{

}
