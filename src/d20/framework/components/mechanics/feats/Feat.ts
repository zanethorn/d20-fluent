/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-30T19:16:53-04:00
 * @Project: d20-fluent
 * @Filename: Feat.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T19:23:27-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

export function HasFeatsMixin<TBase extends Constructor>(Base: TBase) {
    return class extends Base
    {
        private _feats: ArrayList<IFeat> = new ArrayList<IFeat>();

        get feats(): IterableIterator<IFeat> {
            return this._feats[Symbol.iterator]();
        }

        addFeat(feat: IFeat): boolean {
            return this._feats.add(feat);
        }
        removeFeat(feat: IFeat): boolean {
            return this._feats.remove(feat);
        }
    };
}
