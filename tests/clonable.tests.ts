/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-25T13:35:11-04:00
 * @Project: d20-fluent
 * @Filename: clonable.tests.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-26T19:27:17-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IsClonable } from './clonable';
import { expect } from 'chai';
import 'mocha';

class TestTarget
    //implements IClonable
{
    foo: string;
    baz: number;
}
class ClonableTestTarget extends IsClonable(TestTarget){};

describe('Clonable Tests', () => {

    it('Cloned objects should not be the same', () => {
        let source = new ClonableTestTarget();
        source.foo = "bar";
        source.baz = 42;
        let result = source.clone();
        expect(result).to.not.equal(source);
    });

    it('Cloned objects should have the same properties', () => {
        let source = new ClonableTestTarget();
        source.foo = "bar";
        source.baz = 42;
        let result = source.clone();
        for (let p in result) {
            expect((<any>source)[p]).to.not.be.undefined;
        }
    });

    it('Cloned objects should have the same values', () => {
        let source = new ClonableTestTarget();
        source.foo = "bar";
        source.baz = 42;
        let result = source.clone() as ClonableTestTarget;

        expect(result.foo).to.equal("bar");
        expect(result.baz).to.equal(42);
    });

});
