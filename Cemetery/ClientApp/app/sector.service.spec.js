import { TestBed, inject } from '@angular/core/testing';
import { SectorService } from './sector.service';
describe('SectorService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [SectorService]
        });
    });
    it('should be created', inject([SectorService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=sector.service.spec.js.map