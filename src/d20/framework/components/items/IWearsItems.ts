/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T23:31:56-04:00
 * @Project: d20-fluent
 * @Filename: IWearsItems.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T12:37:44-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IHasItems } from "./IHasItems";


export interface IWearsItems
    extends IHasItems
{
    readonly wornItems: IterableIterator<IWearableItem>;
    headItem: IWearableItem;
    glasses: IWearableItem;
    necklace: IWearableItem;
    vest: IWearableItem;
    torso: IWearableItem;
    belt: IWearableItem;
    cloak:IWearableItem;
    bracelet:IWearableItem;
    leftRing:IWearableItem;
    rightRing:IWearableItem;
    boots:IWearableItem
}
