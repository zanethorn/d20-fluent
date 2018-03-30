/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T22:14:27-04:00
 * @Project: d20-fluent
 * @Filename: Dexterity.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-29T22:14:52-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
 import { AbilityScore } from "./AbilityScore";
 import { AbilityScoreType } from "./AbilityScoreType";
 import { IHasScores } from "../IHasScores";

 export class Dexterity
     extends AbilityScore
 {
     constructor(parent: IHasScores){
         super(AbilityScoreType.dexterity, "dexterity", parent);
     }
 }
