/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T15:06:39-04:00
 * @Project: d20-fluent
 * @Filename: ComponentFactory.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-28T14:27:47-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IComponent } from "./IComponent"
import { ComponentCallback } from "./ComponentCallback"
//import { ComponentInitializerOrString } from './ComponentInitializer'

export type ComponentFactory<T extends IComponent> = (name: string, callback: ComponentCallback) => T;
