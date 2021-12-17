import { Component } from '@angular/core';
import {decode, encode} from '@mapbox/polyline';
// import MapiClient from '@mapbox/mapbox-sdk/lib/classes/mapi-client';
// import * as data from '../assets/airport-codes_json.json';
// let temp3 = Object.values(data);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularAPI';

  temp1 = decode("_}rtE~ja{M?_ibE_ibE?");
  temp2 = encode(this.temp1)
}
