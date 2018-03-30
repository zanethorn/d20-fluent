/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T21:21:59-04:00
 * @Project: d20-fluent
 * @Filename: ICanMove.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T10:18:03-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IHasScores } from '../IHasScores';
import { IScore } from '../IScore';
import { Direction } from './Direction';

export interface ICanMove
    extends IHasScores
{
    speed: IScore;
    move(d:Direction): void;
}
