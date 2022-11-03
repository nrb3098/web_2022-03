import { TestBed } from '@angular/core/testing';

import { PanteraService } from './pantera.service';

describe('PanteraService', () => {
  let service: PanteraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanteraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
