/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T17:45:03-04:00
 * @Project: d20-fluent
 * @Filename: ComponentInitializerOrString.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-27T19:08:28-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
import { IComponent } from './IComponent';

export type ComponentInitializer = () => void;
export type ComponentInitializerOrString = string | ComponentInitializer;
