/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-30T19:18:06-04:00
 * @Project: d20-fluent
 * @Filename: ChallengeRating.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T20:07:01-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { Constructor } from "../../../Constructor";
import { IHasScores } from "../IHasScores";
import { IHasChallengeRating } from "./IHasChallengeRating";

export function HasChallengeRatingMixin<TBase extends Constructor<IHasScores>>(Base: TBase): TBase & Constructor<IHasChallengeRating> {
    return class extends Base implements IHasChallengeRating
    {
        readonly challengeRating: number;
    };
}
