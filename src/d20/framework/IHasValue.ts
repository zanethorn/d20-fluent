/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T15:30:03-04:00
 * @Project: d20-fluent
 * @Filename: IHasValue.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-29T21:51:33-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IHasReadonlyValue } from './IHasReadonlyValue'

export interface IHasValue
    extends IHasReadonlyValue
{
    value: number;
}
