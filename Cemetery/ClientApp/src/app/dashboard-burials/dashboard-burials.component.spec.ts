import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBurialsComponent } from './dashboard-burials.component';

describe('DashboardBurialsComponent', () => {
  let component: DashboardBurialsComponent;
  let fixture: ComponentFixture<DashboardBurialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardBurialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBurialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
