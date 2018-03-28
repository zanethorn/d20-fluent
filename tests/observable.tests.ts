/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-26T14:06:12-04:00
 * @Project: d20-fluent
 * @Filename: observable.tests.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-26T14:48:43-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */

import { IsObservable, observe, IPropertyChangedEventArgs } from './observable';
import { expect } from 'chai';
import 'mocha';

class DummyObservable extends IsObservable(Object) {

    private _foo: string = 'bar';

    @observe
    foo: string;
}

describe('Observable Tests', () => {

    it('Observed member casts event when property changes', () => {
        let source = new DummyObservable();

        //expect(source.foo).to.be.equal('bar');

        let handler1Called = false;
        let handler1 = (args:IPropertyChangedEventArgs) => {
            handler1Called =true;

            expect(args.sender).to.be.equal(source);
            expect(args.name).to.be.equal('foo');
            expect(args.oldValue).to.be.equal('bar');
            expect(args.newValue).to.be.equal('baz');
        };
        source.propertyChanged.addHandler(handler1);

        source.foo = 'baz';
        expect(handler1Called).to.be.true;
        expect(source.foo).to.be.equal('baz');
    });

});
