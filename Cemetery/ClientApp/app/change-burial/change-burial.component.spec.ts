import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeBurialComponent } from './change-burial.component';

describe('ChangeBurialComponent', () => {
  let component: ChangeBurialComponent;
  let fixture: ComponentFixture<ChangeBurialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeBurialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeBurialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
