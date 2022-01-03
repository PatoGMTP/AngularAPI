import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PlanedataService } from './planedata.service';

describe('PlanedataService', () => {
  let http: HttpClient;
  let service: PlanedataService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    http = TestBed.inject(HttpClient);
    service = TestBed.inject(PlanedataService);
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
    let obj: {path: [number, number, number, number, boolean][]} = {path: []};
    
    it("should make a request", () => {
      let time = Math.floor((new Date().getTime()) / 1000);
      let obs = service.getData("TEST", time).subscribe(resp => expect(resp).toEqual(obj));

      const req = httpTestingController.expectOne(service.api_url+"TEST"+`&time=${time}`);
      expect(req.request.method).toEqual('GET');

      req.flush(obj)
    });
  });
});
