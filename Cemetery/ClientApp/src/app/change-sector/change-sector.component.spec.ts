import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeSectorComponent } from './change-sector.component';

describe('ChangeSectorComponent', () => {
  let component: ChangeSectorComponent;
  let fixture: ComponentFixture<ChangeSectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeSectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeSectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
