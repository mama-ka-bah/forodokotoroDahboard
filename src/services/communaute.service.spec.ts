import { TestBed } from '@angular/core/testing';

import { CommunauteService } from './communaute.service';

describe('CommunauteService', () => {
  let service: CommunauteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunauteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
