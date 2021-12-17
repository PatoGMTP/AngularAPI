import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanedataService {

  api_url: string = 'https://PatoGM117:LegitDuck117!@opensky-network.org/api/tracks/all?icao24='

  constructor
  (
    private http: HttpClient
  ) { }

  getData(icao24: string, time: number): Observable<{path: [number, number, number, number, boolean][]}>
  {
    console.log(icao24)
    return this.http.get<{path: [number, number, number, number, boolean][]}>(this.api_url+icao24+`&time=${time}`);
  }
}
