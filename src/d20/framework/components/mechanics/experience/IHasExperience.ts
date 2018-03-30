/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-30T00:07:11-04:00
 * @Project: d20-fluent
 * @Filename: IHasExperience.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T00:07:42-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

export interface IHasExperience
    extends IHasScores
{
    experiencePoints: number;
}
