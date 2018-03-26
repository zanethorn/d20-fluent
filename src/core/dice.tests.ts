/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-25T16:44:47-04:00
 * @Project: d20-fluent
 * @Filename: dice.tests.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-25T19:51:54-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
import { roll, ModifierType } from './dice';
import { expect } from 'chai';
import 'mocha';

describe('Dice roll Tests', () => {

    it('Simple die rolls are constructed properly', () => {
        let result = roll(3,6).plus(4);
        expect(result.number).to.equal(3);
        expect(result.sides).to.equal(6);
        expect(result.bonuses.base).to.equal(4);
        expect(result.min).to.equal(7);
        expect(result.max).to.equal(22);
    });

   it('Subtracted bonuses get applied correctly', () => {
       let result = roll(3,6).minus(4);
       expect(result.penalties.base).to.equal(4);
   });

   it('Negative bonuses get applied correctly', () => {
       let result = roll(3,6).plus(-4);
       expect(result.penalties.base).to.equal(4);
   });

   it('Modified die rolls are constructed properly when passed an object', () => {
       let result = roll(3,6).plus(4, ModifierType.circumstance);
       expect(result.bonuses.circumstance).to.equal(4);
   });

   it('Modified die rolls are constructed properly when passed named value', () => {
       let result = roll(3,6).plus(4, ModifierType.circumstance);
       expect(result.bonuses.circumstance).to.equal(4);
   });

   it('Stackable Bonuses get stacked when added', () => {
       let result = roll(3,6)
                       .plus(4, ModifierType.circumstance, true)
                       .plus(2, ModifierType.circumstance, true);
       expect(result.bonuses.circumstance).to.equal(6);
   });


   it('Stackable Penalties get stacked when subtracted', () => {
       let result = roll(3,6)
                       .minus(4, ModifierType.circumstance, true)
                       .minus(2, ModifierType.circumstance, true);
       expect(result.penalties.circumstance).to.equal(6);
   });

   it('Non-Stackable Bonuses apply the largest bonus', () => {
       let result = roll(3,6)
                       .plus(4, ModifierType.insight, false)
                       .plus(2, ModifierType.insight, false);
       expect(result.bonuses.insight).to.equal(4);
   });

   it('Non-Stackable Penalties apply the largest penalty', () => {
       let result = roll(3,6)
                       .minus(4, ModifierType.luck, false)
                       .minus(2, ModifierType.luck, false);
       expect(result.penalties.luck).to.equal(4);
   });

 });
