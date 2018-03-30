/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-30T19:18:06-04:00
 * @Project: d20-fluent
 * @Filename: ChallengeRating.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T19:20:26-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

export function HasChallengeRatingMixin<TBase extends Constructor>(Base: TBase) {
    return class extends Base
    {
        readonly challengeRating: number;
    };
}