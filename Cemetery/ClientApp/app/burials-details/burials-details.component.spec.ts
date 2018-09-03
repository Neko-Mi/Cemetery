import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurialsDetailsComponent } from './burials-details.component';

describe('BurialsDetailsComponent', () => {
  let component: BurialsDetailsComponent;
  let fixture: ComponentFixture<BurialsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurialsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurialsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
