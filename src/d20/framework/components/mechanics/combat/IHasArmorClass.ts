/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T22:48:31-04:00
 * @Project: d20-fluent
 * @Filename: IHasArmorClass.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T12:51:22-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IHasSize } from "../size/IHasSize";
import { IArmorClass } from "./IArmorClass";

export interface IHasArmorClass
    extends IHasSize
{
    armorClass: IArmorClass;
}
