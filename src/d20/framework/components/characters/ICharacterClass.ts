/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T23:36:26-04:00
 * @Project: d20-fluent
 * @Filename: ICharacterClass.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T00:33:30-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IComponent } from "../IComponent";

export interface ICharacterClass
    extends IComponent
{
    addLevel(): void;
}
