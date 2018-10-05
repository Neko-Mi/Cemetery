import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurialPhotoComponent } from './burial-photo.component';

describe('BurialPhotoComponent', () => {
  let component: BurialPhotoComponent;
  let fixture: ComponentFixture<BurialPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurialPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurialPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
