import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCemeteryComponent } from './add-cemetery.component';

describe('AddCemeteryComponent', () => {
  let component: AddCemeteryComponent;
  let fixture: ComponentFixture<AddCemeteryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCemeteryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCemeteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
