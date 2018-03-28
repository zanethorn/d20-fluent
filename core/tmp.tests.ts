/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-25T19:49:22-04:00
 * @Project: d20-fluent
 * @Filename: tmp.tests.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-25T21:08:01-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
import { roll } from './dice';
import { ModifierType } from './tmp';
import { expect } from 'chai';
import 'mocha';

 describe('Dice ModifierType Tests', () => {
     it('ModifierType can be merged between files', () => {
         expect(ModifierType[ModifierType.foo]).to.equal('foo');
     });

     it('Roll Modifiers pick up added values', () => {
         let result = roll(3,6).plus(4, ModifierType.foo);
         expect(result.bonuses.foo).to.equal(4);
     });
 });
