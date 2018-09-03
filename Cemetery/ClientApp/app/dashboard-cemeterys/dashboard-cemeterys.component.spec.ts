import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCemeterysComponent } from './dashboard-cemeterys.component';

describe('DashboardCemeterysComponent', () => {
  let component: DashboardCemeterysComponent;
  let fixture: ComponentFixture<DashboardCemeterysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCemeterysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCemeterysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
