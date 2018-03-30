/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-30T00:02:43-04:00
 * @Project: d20-fluent
 * @Filename: CharacterLevel.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T00:28:46-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { ICharacterClass } from './ICharacterClass'

export type IClassLevel = ICharacterClass & { level: number };
