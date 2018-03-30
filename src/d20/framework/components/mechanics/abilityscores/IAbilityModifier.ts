/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T22:03:33-04:00
 * @Project: d20-fluent
 * @Filename: IAbilityModifier.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-29T22:04:39-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

 import { IAbilityScore } from "./IAbilityScore";
 import { IModifier } from "../IModifier";

export interface IAbilityModifier
    extends IModifier
{
    readonly abilityScore: IAbilityScore;
}
