import { TestBed, inject } from '@angular/core/testing';
import { BurialService } from './burial.service';
describe('BurialService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [BurialService]
        });
    });
    it('should be created', inject([BurialService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=burial.service.spec.js.map