/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T23:31:56-04:00
 * @Project: d20-fluent
 * @Filename: IWearsItems.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T22:04:33-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IHasItems } from "./IHasItems";
import { IWearableItem } from "./IWearableItem";
import { ItemLocation } from "./ItemLocation";

export interface IWearsItems
    extends IHasItems
{
    readonly wornItems: IterableIterator<IWearableItem>;
    itemAt(location:ItemLocation): IWearableItem;
    wearItem(item: IWearableItem, location: ItemLocation): boolean;

}
