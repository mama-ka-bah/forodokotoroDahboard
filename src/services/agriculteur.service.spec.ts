import { TestBed } from '@angular/core/testing';

import { AgriculteurService } from './agriculteur.service';

describe('AgriculteurService', () => {
  let service: AgriculteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgriculteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
