/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T15:27:41-04:00
 * @Project: d20-fluent
 * @Filename: ClonableMixin.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-30T19:52:00-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
import { IClonable } from './IClonable'
import { Constructor } from './Constructor';

export function IsClonable<TBase extends Constructor>(Base: TBase): TBase & Constructor<IClonable> {
    return class extends Base implements IClonable {
        clone(): IClonable {
            return Object.create(this) as IClonable;
        }
    };
}
