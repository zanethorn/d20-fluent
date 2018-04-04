/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-04-03T17:49:00-04:00
 * @Project: d20-fluent
 * @Filename: score.component.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-04-03T17:58:45-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */



import { Component, OnInit, Input } from '@angular/core';
import { IScore } from '../../../d20/framework/components/mechanics';

@Component({
  selector: 'score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

    @Input() score: IScore;

  constructor() { }

  ngOnInit() {
  }

}
