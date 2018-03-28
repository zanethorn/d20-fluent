/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T17:07:27-04:00
 * @Project: d20-fluent
 * @Filename: IEnumerable.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-27T18:50:39-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
export interface IEnumerable<T>
{
    [Symbol.iterator]: () => IterableIterator<T>;
}
