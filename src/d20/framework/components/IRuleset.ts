/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T16:57:41-04:00
 * @Project: d20-fluent
 * @Filename: IRuleset.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-27T19:36:48-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IRule } from './IRule'
import { IEnumerable } from '../collections'

export interface IRuleset
    extends IRule
{
    readonly rules: IEnumerable<IRule>;
    addRule(r:IRule): void;

}
