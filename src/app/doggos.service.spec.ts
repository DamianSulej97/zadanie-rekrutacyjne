import { TestBed } from '@angular/core/testing';

import { DoggosService } from './doggos.service';

describe('DoggosService', () => {
  let service: DoggosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoggosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
