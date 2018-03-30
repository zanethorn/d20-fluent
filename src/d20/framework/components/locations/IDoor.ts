/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T18:54:37-04:00
 * @Project: d20-fluent
 * @Filename: IDoor.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T10:10:45-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IThing } from '../IThing';
import { IMaterial } from '../mechanics';

export interface IDoor
    extends IThing
{
    material: IMaterial;
}
