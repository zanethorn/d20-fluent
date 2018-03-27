/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T15:40:31-04:00
 * @Project: d20-fluent
 * @Filename: observe.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-27T15:42:36-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */


export function observe(target: any, key: string) {

    let innerKey = '_'+key;
    var getter = function() {
        return this[innerKey];
    }

    var setter = function(newVal: any) {
        let oldVal = this[innerKey];
        if (newVal !== oldVal){
            this[innerKey] = newVal;
            this.onPropertyChanged(key, newVal, oldVal);
        }
    }

    if (delete target[key]) {
        // Create new property with getter and setter
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}
