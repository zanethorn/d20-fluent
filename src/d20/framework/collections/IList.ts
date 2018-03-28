/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T17:11:16-04:00
 * @Project: d20-fluent
 * @Filename: IList.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-27T17:29:06-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
import { ICollection } from './ICollection'

export interface IList<T>
    extends ICollection<T>
{
    readonly length: number;
    [index:number]: T;
}
