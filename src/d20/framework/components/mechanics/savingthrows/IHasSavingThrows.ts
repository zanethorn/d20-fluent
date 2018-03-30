/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T22:25:01-04:00
 * @Project: d20-fluent
 * @Filename: IHasSavingThrows.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-29T22:25:49-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { ISavingThrow } from "./ISavingThrow";
import { IHasScores } from "../IHasScores";

export interface IHasSavingThrows
    extends IHasScores
{
    readonly fortitude: ISavingThrow;
    readonly reflex: ISavingThrow;
    readonly will: ISavingThrow;
}
