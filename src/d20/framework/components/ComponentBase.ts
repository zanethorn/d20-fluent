/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-30T22:41:45-04:00
 * @Project: d20-fluent
 * @Filename: ComponentBase.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-04-03T19:56:19-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IComponent } from "./IComponent";
import { d20Environment } from "../../d20Environment";
import { DefaultComponentLibraryFactory } from "./ComponentLibrary";

export class ComponentBase
    implements IComponent
{
    //readonly id: string;
    description: string;
    //public readonly id: string

    constructor(public readonly id: string) {
        DefaultComponentLibraryFactory().registerComponent(this);
        this.description = id;
    }
}
