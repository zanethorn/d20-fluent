/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T22:28:11-04:00
 * @Project: d20-fluent
 * @Filename: Will.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-29T22:28:23-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
 import { SavingThrow } from "./SavingThrow";
 import { SavingThrowType } from "./SavingThrowType";
 import { IHasSavingThrows } from "./IHasSavingThrows";

 export class Will
     extends SavingThrow
 {
     constructor(parent: IHasSavingThrows) {
         super(SavingThrowType.will, "will", parent);
     }
 }
