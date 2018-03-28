/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T15:06:39-04:00
 * @Project: d20-fluent
 * @Filename: ComponentFactory.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-27T19:02:52-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IComponent } from "./IComponent"
import { ComponentInitializerOrString } from './ComponentInitializer'

export type ComponentFactory<T extends IComponent> = (...args:ComponentInitializerOrString[]) => T;
