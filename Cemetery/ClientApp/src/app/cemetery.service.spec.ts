import { TestBed, inject } from '@angular/core/testing';

import { CemeteryService } from './cemetery.service';

describe('CemeteryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CemeteryService]
    });
  });

  it('should be created', inject([CemeteryService], (service: CemeteryService) => {
    expect(service).toBeTruthy();
  }));
});
