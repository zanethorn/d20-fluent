/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T23:29:32-04:00
 * @Project: d20-fluent
 * @Filename: IWearableItem.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-29T23:31:32-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IItem } from "./IItem";
import { IHasType } from "../../IHasType";

export interface IWearableItem
    extends IItem, IHasType<WearableLocation>
{
    
}
