/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T19:01:02-04:00
 * @Project: d20-fluent
 * @Filename: IScore.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-29T21:56:50-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IComponent } from '../IComponent';
import { IHasScores } from './IHasScores';
import { IModifier } from './IModifier';
import { IHasValue } from '../../IHasValue'

export interface IScore
    extends IHasValue, IComponent
{
    readonly parent: IHasScores;
    readonly modifiers: IterableIterator<IModifier>;
    readonly modifiedValue: number;
}
