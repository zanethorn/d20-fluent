/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-29T23:20:22-04:00
 * @Project: d20-fluent
 * @Filename: IHasFeats.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-29T23:24:05-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IHasScores } from "../IHasScores";
import { IFeat } from "./IFeat";

export interface IHasFeats
    extends IHasScores
{
    readonly feats: IterableIterator<IFeat>;
    addFeat(feat:IFeat):boolean;
    removeFeat(feat:IFeat):boolean;
}
