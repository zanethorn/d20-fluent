/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-30T18:14:57-04:00
 * @Project: d20-fluent
 * @Filename: Thing.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T23:03:15-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IThing } from "./IThing";
import { IArea } from "./locations";
import { Constructor } from "../Constructor";
import { ComponentBase } from "./ComponentBase";

export class ThingBase
    extends ComponentBase
    implements IThing
{
    area: IArea;

    // constructor(id: string) {
    //     super(id);
    // }
}
