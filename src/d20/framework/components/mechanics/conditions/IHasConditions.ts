/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T23:44:38-04:00
 * @Project: d20-fluent
 * @Filename: IHasConditions.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-29T23:46:50-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

export interface IHasConditions
    extends IHasScores
{
    conditions: IIterableIterator<ICondition>;
    addCondition(condition:ICondition): boolean;
    removeCondition(condition:ICondition):boolean;
}
