import { TestBed, inject } from '@angular/core/testing';
import { CemeteryService } from './cemetery.service';
describe('CemeteryService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [CemeteryService]
        });
    });
    it('should be created', inject([CemeteryService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=cemetery.service.spec.js.map