/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T15:01:32-04:00
 * @Project: d20-fluent
 * @Filename: Id20Framework.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-28T15:09:27-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IRuleset, IRule, IComponent, ComponentFactory } from './components'

export interface Id20Framework
    extends IComponent
{

    readonly currentComponent: IComponent;

    readonly d20: Id20Framework;

    ruleset: ComponentFactory<IRuleset>;
    rule: ComponentFactory<IRule>;

    include(path:string): Promise<any>;

    init(): void;
}
