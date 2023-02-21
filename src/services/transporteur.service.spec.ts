import { TestBed } from '@angular/core/testing';

import { TransporteurService } from './transporteur.service';

describe('TransporteurService', () => {
  let service: TransporteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransporteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
