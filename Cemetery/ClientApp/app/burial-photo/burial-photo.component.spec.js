import { async, TestBed } from '@angular/core/testing';
import { BurialPhotoComponent } from './burial-photo.component';
describe('BurialPhotoComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [BurialPhotoComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(BurialPhotoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=burial-photo.component.spec.js.map