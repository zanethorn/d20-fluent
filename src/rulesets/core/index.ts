/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T16:55:25-04:00
 * @Project: d20-fluent
 * @Filename: core.ruleset.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-04-03T20:18:32-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
import '../../d20';
import { Creature } from '../../d20/framework/components/creatures';


rulebook("core_rules",
    rule("define_human", () => new Creature("Human")),
    rule("display_loaded", () => { console.log("Loaded core_rules"); })
);
