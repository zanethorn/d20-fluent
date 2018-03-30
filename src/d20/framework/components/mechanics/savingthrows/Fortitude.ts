/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T22:26:28-04:00
 * @Project: d20-fluent
 * @Filename: Fortitude.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-29T22:27:45-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { SavingThrow } from "./SavingThrow";
import { SavingThrowType } from "./SavingThrowType";
import { IHasSavingThrows } from "./IHasSavingThrows";

export class Fortitude
    extends SavingThrow
{
    constructor(parent: IHasSavingThrows) {
        super(SavingThrowType.fortitude, "fortitude", parent);
    }
}
