/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-31T12:14:10-04:00
 * @Project: d20-fluent
 * @Filename: character.component.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-04-03T17:56:18-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */



import { Component, OnInit } from '@angular/core';
import { ICreature } from '../../../d20/framework/components/creatures';
import "../../../d20";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

    character: ICreature;

    constructor() { }

    ngOnInit() {
        this.character = creature('Human');
    }

}
