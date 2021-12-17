import { TestBed } from '@angular/core/testing';

import { PlanedataService } from './planedata.service';

describe('PlanedataService', () => {
  let service: PlanedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
