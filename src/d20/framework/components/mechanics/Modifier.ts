/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T22:00:44-04:00
 * @Project: d20-fluent
 * @Filename: Modifier.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T12:08:13-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IModifier } from "./IModifier";
import { ModifierType } from "./ModifierType";
import { IScore } from "./IScore";

export abstract class Modifier implements IModifier {

    constructor(
        public readonly type: ModifierType,
        public readonly value: number
    ) {}

    abstract appliesTo(score: IScore): boolean;

}
