/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-25T16:24:45-04:00
 * @Project: d20-fluent
 * @Filename: clonable.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-26T19:27:03-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { Constructor } from './mixins';

export interface IClonable
{
    clone(): IClonable
}

export function IsClonable<TBase extends Constructor>(Base: TBase) {
    return class extends Base implements IClonable {
        clone(): IClonable {
            return Object.create(this) as IClonable;
        }
    };
}
