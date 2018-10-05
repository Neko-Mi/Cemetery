import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePlaceComponent } from './change-place.component';

describe('ChangePlaceComponent', () => {
  let component: ChangePlaceComponent;
  let fixture: ComponentFixture<ChangePlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
