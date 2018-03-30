/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T14:57:02-04:00
 * @Project: d20-fluent
 * @Filename: index.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T10:21:30-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { Id20Framework, DefaultFramework } from './framework'
import { IRulebook, IRule } from './framework/components'
import { d20Environment } from './d20Environment';

const D20: d20Environment = d20Environment.instance;
export default D20;

(<any>global).D20 = D20;
(<any>global).rulebook = D20.rulebook;
(<any>global).rule = D20.rule;
(<any>global).include = D20.include;

declare global {
    const D20: d20Environment;
    const rulebook: (id: string, ...rules: IRule[]) => IRulebook;
    const rule: (id:string, onApply: () => void) => IRule;
    const include: (path:string) => Promise<any>;
}
