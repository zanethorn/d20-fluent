/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-26T09:26:53-04:00
 * @Project: d20-fluent
 * @Filename: _core.tests.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-26T12:17:55-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import * as core from './_core';
import { expect } from 'chai';
import 'mocha';

class DummyBase extends Object{
    foo: string = 'bar'
}

enum DummyTypes {
    biz,
    buz
}

describe('core Type Tests', () => {

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

    it('Can use fluent syntax read/write value property to base type', () => {
        let enhancedDummy = DummyBase.with.value();
        let dummy = new enhancedDummy();

        expect(dummy).to.have.property('foo');
        expect(dummy).to.have.property('value');

        dummy.foo = 'baz';
        dummy.value = 42;

        expect(dummy.foo).to.equal('baz');
        expect(dummy.value).to.equal(42);
    });

    it('HasProtectedValue adds public read-only value property to base type', () => {
        let enhancedDummy = core.HasProtectedValue(DummyBase);
        let dummy = new enhancedDummy();

        expect(dummy).to.have.property('foo');
        expect(dummy).to.have.property('value');

        dummy.foo = 'baz';

        expect(() => {
                dummy.value = 42;
            }).to.throw(Error);

        expect(dummy.foo).to.equal('baz');
    });

    it('Can use fluent syntax adds public read-only value property to base type', () => {
        let enhancedDummy = DummyBase.withProtectedValue();
        let dummy = new enhancedDummy();

        expect(dummy).to.have.property('foo');
        expect(dummy).to.have.property('value');

        dummy.foo = 'baz';

        expect(() => {
                dummy.value = 42;
            }).to.throw(Error);

        expect(dummy.foo).to.equal('baz');
    });

    it('HasReadonlyValue adds immutable value property to base type', () => {
        let enhancedDummy = core.HasReadonlyValue(DummyBase);
        let dummy = new enhancedDummy(16);

        expect(dummy).to.have.property('foo');
        expect(dummy).to.have.property('value');

        dummy.foo = 'baz';

        expect(() => {
                dummy.value = 42;
            }).to.throw(Error);

        expect(dummy.foo).to.equal('baz');
        expect(dummy.value).to.equal(16);
    });

    it('Can use fluent syntax to add immutable value property to base type', () => {
        let enhancedDummy = DummyBase.withReadonlyValue();
        let dummy = new enhancedDummy(16);

        expect(dummy).to.have.property('foo');
        expect(dummy).to.have.property('value');

        dummy.foo = 'baz';

        expect(() => {
                dummy.value = 42;
            }).to.throw(Error);

        expect(dummy.foo).to.equal('baz');
        expect(dummy.value).to.equal(16);
    });

    it('HasName adds read/write name property to base type', () => {
        let enhancedDummy = core.HasName(DummyBase);
        let dummy = new enhancedDummy();

        expect(dummy).to.have.property('foo');
        expect(dummy).to.have.property('name');

        dummy.foo = 'baz';
        dummy.name = 'dummy';

        expect(dummy.foo).to.equal('baz');
        expect(dummy.name).to.equal('dummy');
    });

    it('Can use fluent syntax to read/write name property to base type', () => {
        let enhancedDummy = DummyBase.withName();
        let dummy = new enhancedDummy();

        expect(dummy).to.have.property('foo');
        expect(dummy).to.have.property('name');

        dummy.foo = 'baz';
        dummy.name = 'dummy';

        expect(dummy.foo).to.equal('baz');
        expect(dummy.name).to.equal('dummy');
    });

    it('HasProtectedName adds public read-only name property to base type', () => {
        let enhancedDummy = core.HasProtectedName(DummyBase);
        let dummy = new enhancedDummy();

        expect(dummy).to.have.property('foo');
        expect(dummy).to.have.property('name');

        dummy.foo = 'baz';

        expect(() => {
                dummy.name = 'zum';
            }).to.throw(Error);

        expect(dummy.foo).to.equal('baz');
    });

    it('Can use fluent syntax to add public read-only name property to base type', () => {
        let enhancedDummy = DummyBase.withProtectedName();
        let dummy = new enhancedDummy();

        expect(dummy).to.have.property('foo');
        expect(dummy).to.have.property('name');

        dummy.foo = 'baz';

        expect(() => {
                dummy.name = 'zum';
            }).to.throw(Error);

        expect(dummy.foo).to.equal('baz');
    });

    it('HasReadonlyName adds immutable name property to base type', () => {
        let enhancedDummy = core.HasReadonlyName(DummyBase);
        let dummy = new enhancedDummy('zim');

        expect(dummy).to.have.property('foo');
        expect(dummy).to.have.property('name');

        dummy.foo = 'baz';

        expect(() => {
                dummy.name = 'zum';
            }).to.throw(Error);

        expect(dummy.foo).to.equal('baz');
        expect(dummy.name).to.equal('zim');
    });

    it('Can use fluent syntax to add immutable name property to base type', () => {
        let enhancedDummy = DummyBase.withReadonlyName();
        let dummy = new enhancedDummy('zim');

        expect(dummy).to.have.property('foo');
        expect(dummy).to.have.property('name');

        dummy.foo = 'baz';

        expect(() => {
                dummy.name = 'zum';
            }).to.throw(Error);

        expect(dummy.foo).to.equal('baz');
        expect(dummy.name).to.equal('zim');
    });

    it('HasReadonlyType adds read-only type property to base type', () => {
        let enhancedDummy = core.HasReadonlyType(DummyBase, DummyTypes);
        let dummy = new enhancedDummy(DummyTypes.buz);

        expect(dummy).to.have.property('foo');
        expect(dummy).to.have.property('type');

        dummy.foo = 'baz';

        expect(dummy.foo).to.equal('baz');
        expect(dummy.type).to.equal(DummyTypes.buz);
    });

    it('Can use fluent syntax to add read-only type property to base type', () => {
        let enhancedDummy = DummyBase.withReadonlyType<DummyTypes>();
        let dummy = new enhancedDummy(DummyTypes.buz);

        expect(dummy).to.have.property('foo');
        expect(dummy).to.have.property('type');

        dummy.foo = 'baz';

        expect(dummy.foo).to.equal('baz');
        expect(dummy.type).to.equal(DummyTypes.buz);
    });
});
