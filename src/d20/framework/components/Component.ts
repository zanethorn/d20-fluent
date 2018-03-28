/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T19:15:12-04:00
 * @Project: d20-fluent
 * @Filename: Component.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-27T19:36:37-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IComponent } from './IComponent';
import { ComponentInitializer } from './ComponentInitializer';

export type Component<T extends IComponent> = IComponent ;//& 
