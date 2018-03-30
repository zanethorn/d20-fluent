/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T23:24:39-04:00
 * @Project: d20-fluent
 * @Filename: IItem.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T10:04:01-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IThing } from '../IThing';
import { ICanTakeDamage } from '../mechanics';

export interface IItem
    extends IThing, ICanTakeDamage
{

}
