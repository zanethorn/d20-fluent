/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T22:54:21-04:00
 * @Project: d20-fluent
 * @Filename: IHasSize.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-29T23:25:57-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

 import { IModifier } from "./IModifier";
 import { Size } from "./Size";

export interface IHasSize
    extends IHasScores
{
    size: Size;
    weight: number;
    sizeModifer: IModifier;
}
