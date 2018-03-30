/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T22:22:47-04:00
 * @Project: d20-fluent
 * @Filename: SavingThrow.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-29T22:24:26-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { ISavingThrow } from "./ISavingThrow";
import { Score } from "../Score";
import { SavingThrowType } from "./SavingThrowType";
import { IHasScores } from "../IHasScores";
import { IHasSavingThrows } from "./IHasSavingThrows";

export abstract class SavingThrow extends Score implements ISavingThrow {
    constructor(public readonly type: SavingThrowType, id:string, parent: IHasSavingThrows) {
        super(id, parent);
    }
}
