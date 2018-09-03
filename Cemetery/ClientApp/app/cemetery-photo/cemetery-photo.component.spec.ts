import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CemeteryPhotoComponent } from './cemetery-photo.component';

describe('CemeteryPhotoComponent', () => {
  let component: CemeteryPhotoComponent;
  let fixture: ComponentFixture<CemeteryPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CemeteryPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CemeteryPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
