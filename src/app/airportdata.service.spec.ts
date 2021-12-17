import { TestBed } from '@angular/core/testing';

import { AirportdataService } from './airportdata.service';

describe('AirportdataService', () => {
  let service: AirportdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirportdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
