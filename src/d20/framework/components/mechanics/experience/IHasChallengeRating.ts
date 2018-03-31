/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T23:38:45-04:00
 * @Project: d20-fluent
 * @Filename: IHasChallengeRating.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T23:26:49-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IHasScores } from "../IHasScores";

export interface IHasChallengeRating
    extends IHasScores
{
    readonly challengeRating: number;
}
