import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { StaticmapService } from './staticmap.service';

describe('StaticmapService', () => {
  let service: StaticmapService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(StaticmapService);
    httpClient = TestBed.inject(HttpClient);
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
    let to: string = "EDDF";
    let path: [number, number][] = [[0, 0], [8.570556, 50.033333]];
    let from: [number, number] = [8.570556, 50.033333];

    it("should return a url", () => {
      let url = service.getData(path, from, to);
      expect(url).toBeTruthy();
      expect(typeof url).toBe("string");
      expect(url.length).toBeGreaterThan(0);
    });
  });
});
