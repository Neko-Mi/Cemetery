import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorPhotoComponent } from './sector-photo.component';

describe('SectorPhotoComponent', () => {
  let component: SectorPhotoComponent;
  let fixture: ComponentFixture<SectorPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
