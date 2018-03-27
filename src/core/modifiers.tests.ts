/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-26T15:10:42-04:00
 * @Project: d20-fluent
 * @Filename: modifiers.tests.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-26T15:17:47-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */


import * as core from './modifiers';
import { expect } from 'chai';
import 'mocha';

describe('Modifier Tests', () => {

    it('HasValue adds read/write value property to base type', () => {
        let enhancedDummy = core.HasValue(DummyBase);
        let dummy = new enhancedDummy();

        expect(dummy).to.have.property('foo');
        expect(dummy).to.have.property('value');

        dummy.foo = 'baz';
        dummy.value = 42;

        expect(dummy.foo).to.equal('baz');
        expect(dummy.value).to.equal(42);
    });

});
