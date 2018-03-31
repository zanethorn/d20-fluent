/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T23:11:09-04:00
 * @Project: d20-fluent
 * @Filename: Alignment.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T20:41:52-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { GoodEvil } from './GoodEvil';
import { LawChaos } from './LawChaos';
import { IHasAlignment } from './IHasAlignment';
import { Constructor } from '../../../Constructor';

export enum Alignment {
    lawful_good = GoodEvil.good | LawChaos.law,
    lawful_neutral = GoodEvil.neutral | LawChaos.law,
    lawful_evil = GoodEvil.evil | LawChaos.law,
    neutral_good = GoodEvil.good | LawChaos.neutral,
    true_neutral = GoodEvil.neutral | LawChaos.neutral,
    neutral_evil = GoodEvil.evil | LawChaos.neutral,
    chaotic_good = GoodEvil.evil | LawChaos.chaos,
    chaotic_neutral = GoodEvil.neutral | LawChaos.chaos,
    chaotic_evil = GoodEvil.evil | LawChaos.chaos
}

export function HasAlignmentMixin<TBase extends Constructor>(Base: TBase): TBase & Constructor<IHasAlignment>{
    return class extends Base implements IHasAlignment
    {
        alignment: Alignment;
    };
}
