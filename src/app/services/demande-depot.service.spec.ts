import { TestBed } from '@angular/core/testing';

import { DemandeDepotService } from './demande-depot.service';

describe('DemandeDepotService', () => {
  let service: DemandeDepotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeDepotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
