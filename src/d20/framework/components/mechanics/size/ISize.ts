/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-30T13:54:19-04:00
 * @Project: d20-fluent
 * @Filename: ISize.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T14:19:44-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IComponent } from "../../IComponent";
import { IModifier } from "../IModifier";

export interface ISize
    extends IComponent
{
    sizeModifier: IModifier;
}
