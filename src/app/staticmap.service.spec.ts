import { TestBed } from '@angular/core/testing';

import { StaticmapService } from './staticmap.service';

describe('StaticmapService', () => {
  let service: StaticmapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticmapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
