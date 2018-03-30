/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T23:52:20-04:00
 * @Project: d20-fluent
 * @Filename: IEffect.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-29T23:53:13-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
 
import { IModifier } from "./IModifier";

export interface IEffect
    extends IModifier
{
    duration: number;
}
