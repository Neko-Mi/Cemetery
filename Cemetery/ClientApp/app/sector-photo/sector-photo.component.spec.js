import { async, TestBed } from '@angular/core/testing';
import { SectorPhotoComponent } from './sector-photo.component';
describe('SectorPhotoComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SectorPhotoComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SectorPhotoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=sector-photo.component.spec.js.map