/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T22:15:37-04:00
 * @Project: d20-fluent
 * @Filename: Intelligence.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-29T22:16:03-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { AbilityScore } from "./AbilityScore";
import { AbilityScoreType } from "./AbilityScoreType";
import { IHasScores } from "../IHasScores";

export class Intelligence
    extends AbilityScore
{
    constructor(parent: IHasScores){
        super(AbilityScoreType.intelligence, "intelligence", parent);
    }
}
