/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T14:57:02-04:00
 * @Project: d20-fluent
 * @Filename: index.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-28T15:11:45-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { Id20Framework, DefaultFramework } from './framework'
import { IRuleset, IRule, ComponentFactory } from './framework/components'
import { d20Environment } from './d20Environment';

const d20: d20Environment = d20Environment.instance;
export default d20;

(<any>global).d20 = d20;
(<any>global).ruleset = d20.ruleset;
(<any>global).rule = d20.rule;
(<any>global).include = d20.include;

declare global {
    const d20: d20Environment;
    const ruleset: ComponentFactory<IRuleset>;
    const rule: ComponentFactory<IRule>;
    const include: (path:string) => Promise<any>;
}
