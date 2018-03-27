/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-25T18:06:43-04:00
 * @Project: d20-fluent
 * @Filename: mixin.tests.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-25T20:54:03-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import * as mixins from './mixins';
import { expect } from 'chai';
import 'mocha';

class Simple {
    foo:string = 'test'
}

function AddBaz<TBase extends mixins.Constructor>(Base: TBase) {
    return class extends Base {
        bar: number = 42;
        baz(): boolean {
            return true;
        }
    };
}

const Complex = AddBaz(Simple);

describe('Mixin Tests', () => {

    it('Extended type constructor is same as base', () => {
        let test = new Complex();
        expect(test.constructor).to.equal(Complex);
    });

    it('Extended type has properties of mixin', () => {
        let test = new Complex();
        expect(test.foo).to.equal('test');
        expect(test.bar).to.equal(42);
        expect(test.baz()).to.equal(true);
    });
});
