/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-30T10:36:29-04:00
 * @Project: d20-fluent
 * @Filename: CreatureType.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T10:37:09-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { ICreatureType } from "./ICreatureType";

export class CreatureType implements ICreatureType {
    description: string;
    
    constructor(public readonly id: string){}

}
