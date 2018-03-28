/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T17:01:49-04:00
 * @Project: d20-fluent
 * @Filename: IRule.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-28T16:18:45-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IComponent } from './IComponent'

export interface IRule
    extends IComponent
{
    apply(): void;
}
