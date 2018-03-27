/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T15:01:32-04:00
 * @Project: d20-fluent
 * @Filename: Id20Framework.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-27T15:12:21-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { ComponentFactory, IAdventure, IDungeon } from './components'

export interface Id20Framework {
    adventure: ComponentFactory<IAdventure>;
    dungeon: ComponentFactory<IDungeon>;
}
