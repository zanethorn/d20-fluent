/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T23:07:21-04:00
 * @Project: d20-fluent
 * @Filename: IHasAbilityScores.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-29T23:08:09-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IAbilityScore } from "./IAbilityScore";
import { IHasScores } from "../IHasScores";

export interface IHasAbilityScores
    extends IHasScores 
{
    readonly strength: IAbilityScore;
    readonly dexterity: IAbilityScore;
    readonly constitution: IAbilityScore;
    readonly intelligence: IAbilityScore;
    readonly wisdom: IAbilityScore;
    readonly charisma: IAbilityScore;
}
