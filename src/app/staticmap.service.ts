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

  async getData(input: [number, number][], from: [number, number], to: string)//: Observable<>
  {
    // console.log(data)
    // let newdata = Object.values(data);
    // newdata = newdata.map(item => {
    //   let obj = {};
    //   obj[item.ident] = item.coordinates;
    //   return obj;
    // });
    // console.log(newdata);
    // console.log(JSON.stringify(newdata));

    // let myarr = Object.values(codes);
    // let dict = {}
    // let count = 0
    // for (const item in codes)
    // {
    //   // console.log(item);
    //   // console.log(codes[item]);
    //   for (const prop in codes[item])
    //   {
    //     let arr: string[]|number[] = codes[item][prop].split(",");
    //     // console.log(arr);
    //     arr = arr.map(item => parseInt(item));
    //     dict[prop] = arr
    //     // dict[prop] = codes[item][prop]
    //     // console.log(prop, codes[item][prop], typeof codes[item][prop]);
    //   }
    //   // count++
    //   // if (count > 10) break;
    // }

    // console.log(dict);
    // console.log(JSON.stringify(dict));


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
            coordinates: input
          }
        },
        {
          marker:
          {
            size: 'large',
            coordinates: this.to_list[to],
            label: "B",
            color: '#000'
          }
        },
        {
          marker:
          {
            size: 'large',
            coordinates: from,
            label: "A",
            color: '#000'
          }
        },
      ]
    });
    const staticImageUrl = request.url();
    console.log(staticImageUrl);
  }
}
