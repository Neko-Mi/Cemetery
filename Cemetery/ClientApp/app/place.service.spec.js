import { TestBed, inject } from '@angular/core/testing';
import { PlaceService } from './place.service';
describe('PlaceService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [PlaceService]
        });
    });
    it('should be created', inject([PlaceService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=place.service.spec.js.map