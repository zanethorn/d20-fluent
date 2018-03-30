/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-30T18:14:57-04:00
 * @Project: d20-fluent
 * @Filename: Thing.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T18:18:13-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IThing } from "./IThing";
import { IArea } from "./locations";
import { Constructor } from "../Constructor";

export abstract class Thing
    implements IThing
{
    area: IArea;
    description: string;

    constructor(public readonly id: string) {}
}
