/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T19:11:43-04:00
 * @Project: d20-fluent
 * @Filename: IHasScores.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T17:29:12-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
import { IHasModifiers } from './IHasModifiers'
import { IHasValue } from '../../IHasValue'

declare module './IScore'
{
    export interface IScore
    {

    }
}
import { IScore } from './IScore';


export interface IHasScores
    extends IHasModifiers
{
    readonly scores: IterableIterator<IScore>;
    getScore(id:string):IScore;
}
