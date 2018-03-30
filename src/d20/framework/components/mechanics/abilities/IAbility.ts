/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-30T09:48:40-04:00
 * @Project: d20-fluent
 * @Filename: IAbility.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T10:50:18-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IComponent } from "../../IComponent";
import { IHasType } from "../../../IHasType";
import { AbilityType } from "./AbilityType";

export interface IAbility
    extends IComponent, IHasType<AbilityType>
{

}
