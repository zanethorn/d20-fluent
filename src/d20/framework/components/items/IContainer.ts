/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T23:56:58-04:00
 * @Project: d20-fluent
 * @Filename: IContainer.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T10:02:12-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IItem } from "./IItem";
import { IHasItems } from "./IHasItems";


export interface IContainer
    extends IItem, IHasItems
{

}
