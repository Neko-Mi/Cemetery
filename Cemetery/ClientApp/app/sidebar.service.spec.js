import { TestBed, inject } from '@angular/core/testing';
import { SidebarService } from './sidebar.service';
describe('SidebarService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [SidebarService]
        });
    });
    it('should be created', inject([SidebarService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=sidebar.service.spec.js.map