import { async, TestBed } from '@angular/core/testing';
import { DashboardCemeterysComponent } from './dashboard-cemeterys.component';
describe('DashboardCemeterysComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DashboardCemeterysComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DashboardCemeterysComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=dashboard-cemeterys.component.spec.js.map