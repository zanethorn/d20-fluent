/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-25T16:33:37-04:00
 * @Project: d20-fluent
 * @Filename: index.tests.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-03-25T19:23:26-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
 import * as core from './index';
 import { expect } from 'chai';
 import 'mocha';

 describe('core Export Tests', () => {

     it('core module should export the roll function', () => {
         expect(core.roll).to.not.equal(undefined);
     });

 });
