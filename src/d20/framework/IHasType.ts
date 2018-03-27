/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T15:31:32-04:00
 * @Project: d20-fluent
 * @Filename: IHasType.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-27T15:32:15-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

export interface IHasType<T>
{
    readonly type: T;
}
