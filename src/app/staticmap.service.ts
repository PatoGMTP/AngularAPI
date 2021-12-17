import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import stat, { PathOverlay } from '@mapbox/mapbox-sdk/services/static'
// import * as data from '../assets/airport-codes_json.json';
// import * as codes from '../assets/short.json';

@Injectable({
  providedIn: 'root'
})
export class StaticmapService {

  to_list = {EDDF: [8.570556, 50.033333], EGLL: [-0.461941, 51.4706], LIRF: [12.2388889, 41.8002778], UUEE: [37.4146, 55.972599]};

  constructor
  (
    private http: HttpClient
  ) { }

  getData(input: [number, number][], from: [number, number], to: string): string
  {

    let mything = stat({ accessToken: "pk.eyJ1IjoicGF0b2dtIiwiYSI6ImNreDg1dXJvZzMyZXEzMXEzZ2ZmZmd0MHQifQ.GkBRwqLwWeTNpy1vNkxElg" });
    console.log(mything);
    
    const request = mything.getStaticImage({
      ownerId: 'mapbox',
      styleId: 'light-v10',
      width: 800,
      height: 500,
      position: "auto",
      overlays: [
        {
          path: 
          {
            coordinates: input,
            strokeColor: "#0000FF"
          }
        },
        {
          marker:
          {
            size: 'large',
            coordinates: this.to_list[to],
            label: "B",
            color: '#FF0000'
          }
        },
        {
          marker:
          {
            size: 'large',
            coordinates: from,
            label: "A",
            color: '#FF0000'
          }
        },
      ]
    });
    const staticImageUrl = request.url();
    console.log(staticImageUrl);
    return staticImageUrl;
  }
}
