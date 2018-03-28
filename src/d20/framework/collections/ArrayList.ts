/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-27T17:13:02-04:00
 * @Project: d20-fluent
 * @Filename: ArrayList.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-27T18:47:09-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
import { IList } from "./IList"

export class ArrayList<T>
    extends Array<T>
    implements IList<T>
{
    // get count(): number{
    //     return this.length;
    // }

    add(item:T): boolean {
        if (this.indexOf(item) === -1){
            this.push(item);
            return true;
        }
        return false;
    }

    remove(item:T): boolean {
        let ix = this.indexOf(item);
        if (ix === -1){
            this.splice(ix,1);
            return true;
        }
        return false;
    }
}
