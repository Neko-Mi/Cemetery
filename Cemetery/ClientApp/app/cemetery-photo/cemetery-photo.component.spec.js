import { async, TestBed } from '@angular/core/testing';
import { CemeteryPhotoComponent } from './cemetery-photo.component';
describe('CemeteryPhotoComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CemeteryPhotoComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CemeteryPhotoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=cemetery-photo.component.spec.js.map