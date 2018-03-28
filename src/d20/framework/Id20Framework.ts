/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T15:01:32-04:00
 * @Project: d20-fluent
 * @Filename: Id20Framework.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-27T20:33:13-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IRuleset, IComponent, ComponentFactory } from './components'

export interface Id20Framework
    extends IComponent
{

    readonly currentComponent: IComponent;

    readonly d20: Id20Framework;

    ruleset: ComponentFactory<IRuleset>;

    include(p: IComponent | string): void;
}
