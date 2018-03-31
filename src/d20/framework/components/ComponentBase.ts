/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-30T22:41:45-04:00
 * @Project: d20-fluent
 * @Filename: ComponentBase.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-31T00:23:23-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IComponent } from "./IComponent";

export class ComponentBase
    implements IComponent
{
    //readonly id: string;
    description: string;
    //public readonly id: string

    constructor(public readonly id: string) {}
}
