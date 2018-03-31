/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-30T10:36:29-04:00
 * @Project: d20-fluent
 * @Filename: CreatureType.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T23:01:23-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { ICreatureType } from "./ICreatureType";
import {
    HasModifiersMixin,
    HasScoresMixin,
    HasAbilitiesMixin,
    IHasModifiers,
    IHasScores,
    IHasAbilities
} from "../mechanics";
import { ComponentBase } from "../ComponentBase";

export class CreatureType
    extends
    HasAbilitiesMixin (
        HasScoresMixin (
            HasModifiersMixin (
                ComponentBase
            )
        )
    )
    implements ICreatureType
{
    constructor(id: string){
        super(id);
    }

    static readonly humanoid: ICreatureType = new CreatureType("humanoid");

}
