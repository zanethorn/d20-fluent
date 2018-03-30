/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T22:00:44-04:00
 * @Project: d20-fluent
 * @Filename: Modifier.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-29T22:02:23-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IModifier } from "./IModifier";
import { ModifierType } from "./ModifierType";
import { IScore } from "./IScore";

export class Modifier implements IModifier {

    value: number;

    constructor(readonly type: ModifierType) {}

    appliesTo(score: IScore): boolean {
        throw new Error("Method not implemented.");
    }

}
