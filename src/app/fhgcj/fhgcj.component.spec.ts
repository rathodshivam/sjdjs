/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FhgcjComponent } from './fhgcj.component';

describe('FhgcjComponent', () => {
  let component: FhgcjComponent;
  let fixture: ComponentFixture<FhgcjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FhgcjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FhgcjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
