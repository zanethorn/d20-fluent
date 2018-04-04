/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T15:01:32-04:00
 * @Project: d20-fluent
 * @Filename: Id20Framework.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-04-03T20:19:23-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import {
    IRulebook,
    IRule,
    IComponent
} from './components'
import { RulebookBinder } from './components/Rulebook';
import { RuleBinder } from './components/Rule';
import { ICreature } from './components/creatures';

export interface Id20Framework
    extends IComponent
{
    readonly currentComponent: IComponent;

    readonly rulebook: RulebookBinder;
    readonly rule: RuleBinder;

    readonly include: (path:string) => Promise<any>;
    readonly creature: (type:string, map?: any) => ICreature;

    initialize(): void;
}
