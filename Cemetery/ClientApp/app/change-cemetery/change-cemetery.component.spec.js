import { async, TestBed } from '@angular/core/testing';
import { ChangeCemeteryComponent } from './change-cemetery.component';
describe('ChangeCemeteryComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ChangeCemeteryComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ChangeCemeteryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=change-cemetery.component.spec.js.map