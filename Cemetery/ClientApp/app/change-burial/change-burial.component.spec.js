import { async, TestBed } from '@angular/core/testing';
import { ChangeBurialComponent } from './change-burial.component';
describe('ChangeBurialComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ChangeBurialComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ChangeBurialComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=change-burial.component.spec.js.map