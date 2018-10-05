import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPlacesComponent } from './dashboard-places.component';

describe('DashboardPlacesComponent', () => {
  let component: DashboardPlacesComponent;
  let fixture: ComponentFixture<DashboardPlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
