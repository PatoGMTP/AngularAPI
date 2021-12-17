import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirportdataService {

  constructor
  (
    private http: HttpClient
  ) { }

  getData(input: string): Observable<{icao24: string, estDepartureAirport: string, lastSeen: number}[]>
  {
    let time = Math.floor((new Date().getTime()) / 1000);
    console.log(time)
    return this.http
      .get<{icao24: string, estDepartureAirport: string, lastSeen: number}[]>
      (this.api_url+input+`&begin=${time-(60*60*24*2)}&end=${time}`);
  }













  api_url: string = 'https://PatoGM117:LegitDuck117!@opensky-network.org/api/flights/arrival?airport='
}
