/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T20:31:08-04:00
 * @Project: d20-fluent
 * @Filename: roll.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-29T20:37:08-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { Die } from './Die'

export type DieRoll = () => number & { count: number, die: Die, modifier:number };

export function roll(count:number, die:Die, modifier:number = 0): DieRoll {
    let r = function(): number {
        let t = modifier;
        for (let i = 0; i < count; i++) {
            t += Math.floor(Math.random() * <number>die) + 1;
        }
        return t;
    };

    (<any>r).count = count;
    (<any>r).die = die;
    (<any>r).modifier = modifier;

    return r as DieRoll;
}
