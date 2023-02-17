import { TestBed } from '@angular/core/testing';

import { ChargementService } from './chargement.service';

describe('ChargementService', () => {
  let service: ChargementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChargementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
