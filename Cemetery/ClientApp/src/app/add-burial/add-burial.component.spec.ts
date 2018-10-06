import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBurialComponent } from './add-burial.component';

describe('AddBurialComponent', () => {
  let component: AddBurialComponent;
  let fixture: ComponentFixture<AddBurialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBurialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBurialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
