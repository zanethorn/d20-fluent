/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-28T14:20:51-04:00
 * @Project: d20-fluent
 * @Filename: ComponentCallback.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-28T14:31:00-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IComponent } from './IComponent'

export type ComponentCallback = (self?:any) => void;
