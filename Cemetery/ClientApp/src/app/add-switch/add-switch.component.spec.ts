import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSwitchComponent } from './add-switch.component';

describe('AddSwitchComponent', () => {
  let component: AddSwitchComponent;
  let fixture: ComponentFixture<AddSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
