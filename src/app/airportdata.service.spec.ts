import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AirportdataService } from './airportdata.service';

describe('AirportdataService', () => {
  let http: HttpClient;
  let service: AirportdataService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    http = TestBed.inject(HttpClient);
    service = TestBed.inject(AirportdataService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  describe("#getData", () => {
    let arr = [{icao24: "", estDepartureAirport: "", lastSeen: 0}];
    it("should make a request", () => {
      let obs = service.getData("EDDF").subscribe(resp => expect(resp).toEqual(arr))
      let time = Math.floor((new Date().getTime()) / 1000);

      const req = httpTestingController.expectOne(service.api_url+"EDDF"+`&begin=${time-(60*60*24*2)}&end=${time}`);
      expect(req.request.method).toEqual('GET');

      req.flush(arr)
    });
  });
});
