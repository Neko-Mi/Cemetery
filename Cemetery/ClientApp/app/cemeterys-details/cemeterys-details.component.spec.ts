import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CemeterysDetailsComponent } from './cemeterys-details.component';

describe('CemeterysDetailsComponent', () => {
  let component: CemeterysDetailsComponent;
  let fixture: ComponentFixture<CemeterysDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CemeterysDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CemeterysDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
