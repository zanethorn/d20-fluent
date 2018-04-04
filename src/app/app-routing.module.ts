/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-28T11:41:58-04:00
 * @Project: d20-fluent
 * @Filename: app-routing.module.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-04-03T17:55:31-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroComponent }   from './intro/intro.component';
import { CharacterComponent } from './inspectors/character/character.component';
import { RulesetComponent } from './inspectors/ruleset/ruleset.component';

const routes: Routes = [
    { path: '', redirectTo: 'intro', pathMatch: 'full' },
    //{ path: 'bin/app', redirectTo: 'intro', pathMatch: 'full' },
    { path: 'intro', component: IntroComponent },
    { path: 'inspectors/rulesets', component: RulesetComponent },
    { path: 'inspectors/character', component: CharacterComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
