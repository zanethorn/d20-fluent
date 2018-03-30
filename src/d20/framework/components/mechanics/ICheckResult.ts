/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-30T11:03:26-04:00
 * @Project: d20-fluent
 * @Filename: ICheckResult.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T12:11:23-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IHasReadonlyValue } from "../../IHasReadonlyValue";
import { IScore } from "./IScore";
import { IModifier } from "./IModifier";


export interface ICheckResult
    extends IHasReadonlyValue
{
    readonly score: IScore;
    readonly modifiers: IterableIterator<IModifier>;
    readonly modifiedValue: number;
    readonly dc: number;
    readonly isNatural1: boolean;
    readonly isNatural20: boolean;
    readonly success: boolean;
}
