/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-30T21:21:24-04:00
 * @Project: d20-fluent
 * @Filename: WearsItems.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-31T00:05:02-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { Constructor } from "../../Constructor";
import { ArrayList } from "../../collections";
import { IWearsItems } from "./IWearsItems";
import { IHasItems } from "./IHasItems";
import { IWearableItem } from "./IWearableItem";
import { ItemLocation } from "./ItemLocation";

export function WearsItemsMixin<TBase extends Constructor<IHasItems>>(Base: TBase): TBase & Constructor<IWearsItems> {
    return class extends Base implements IWearsItems
    {
        readonly wornItems: IterableIterator<IWearableItem>;

        itemAt(location:ItemLocation): IWearableItem {
            throw new Error("Method not implemented.");
        }
        wearItem(item: IWearableItem, location: ItemLocation): boolean {
            throw new Error("Method not implemented.");
        }
    };
}
