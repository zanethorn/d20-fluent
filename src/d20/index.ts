/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T14:57:02-04:00
 * @Project: d20-fluent
 * @Filename: index.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-27T15:12:35-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { Id20Framework } from './framework'
import { d20 } from './main'

class Framework
    implements Id20Framework
{
    adventure: ComponentFactory<IAdventure>;
    dungeon: ComponentFactory<IDungeon>;
}

let d20: Id20Framework = new Framework();

exports.d20 = d20;
exports.adventure = d20.adventure;
exports.dungeon = d20.dungeon;
