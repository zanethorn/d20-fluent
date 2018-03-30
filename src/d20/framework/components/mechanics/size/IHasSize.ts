/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T22:54:21-04:00
 * @Project: d20-fluent
 * @Filename: IHasSize.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T14:16:54-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

 import { IModifier } from "../IModifier";
 import { IHasScores } from '../IHasScores';
 import { ISize } from "./ISize";

export interface IHasSize
    extends IHasScores
{
    size: ISize;
    weight: number;
}
