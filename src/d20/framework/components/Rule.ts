/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-28T06:31:54-04:00
 * @Project: d20-fluent
 * @Filename: Rule.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-28T13:09:11-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
import { ComponentBase } from './ComponentBase';
import { IComponent } from './IComponent';
import { IRule } from "./IRule";

export class Rule
    extends ComponentBase
    implements IRule
{
    constructor(
        parent:IComponent,
        name:string
        ) {
        super(parent, name);
    }

}
