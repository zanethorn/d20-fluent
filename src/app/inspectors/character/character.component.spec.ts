/**
 * @Author: Zane Thorn <zanethorn>
 * @Date:   2018-03-31T12:14:10-04:00
 * @Project: d20-fluent
 * @Filename: character.component.spec.ts
 * @Last modified by:   zanethorn
 * @Last modified time: 2018-04-03T09:01:27-04:00
 * @License: https://raw.githubusercontent.com/zanethorn/d20-fluent/master/LICENSE
 * @Copyright: 2018 Zane Thorn
 */



import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterComponent } from './character.component';
import { expect } from 'chai';

describe('CharacterComponent', () => {
  let component: CharacterComponent;
  let fixture: ComponentFixture<CharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
