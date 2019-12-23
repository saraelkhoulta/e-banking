import { TestBed } from '@angular/core/testing';

import { CompteService } from './comptes.service';

describe('ComptesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompteService = TestBed.get(CompteService);
    expect(service).toBeTruthy();
  });
});
