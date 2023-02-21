import { TestBed } from '@angular/core/testing';

import { StockageServiceService } from './stockage-service.service';

describe('StockageServiceService', () => {
  let service: StockageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
