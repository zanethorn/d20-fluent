/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T23:48:29-04:00
 * @Project: d20-fluent
 * @Filename: IArmor.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T10:02:50-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IWearableItem } from "./IWearableItem";
import { IModifier } from "../mechanics";

export interface IArmor
    extends IWearableItem
{
    armorModifier: IModifier;
}
