/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-26T09:27:26-04:00
 * @Project: d20-fluent
 * @Filename: events.tests.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-26T09:53:55-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
 import { EventArgs, Event } from './events';
 import { expect } from 'chai';
 import 'mocha';

class DummyEventArgs
    extends EventArgs
{
    constructor(sender: object) {
        super(sender);
    }
}

class DummyEvent
    extends Event<DummyEventArgs>
{

}

class DummyHasEvent
{
    readonly onEventTriggered: DummyEvent = new DummyEvent();
    triggerEvent(): void {
        let args = new DummyEventArgs(this);
        this.onEventTriggered.invoke(args);
    }
}

 describe('Event Tests', () => {

     it('All handlers get invoked in the correct order when event is invoked', () => {
         let source = new DummyHasEvent();
         let handler1 = (args:DummyEventArgs) => { return; };
         let handler2 = (args:DummyEventArgs) => { return; };

         source.onEventTriggered.addHandler(handler1);
         source.onEventTriggered.addHandler(handler2);

         source.triggerEvent();
         expect(handler1).should.have.been.calledOnce;
         expect(handler2).should.have.been.calledOnce;
     });


 });