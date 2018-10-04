import { TestBed, inject } from '@angular/core/testing';

import { BurialService } from './burial.service';

describe('BurialService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BurialService]
    });
  });

  it('should be created', inject([BurialService], (service: BurialService) => {
    expect(service).toBeTruthy();
  }));
});
