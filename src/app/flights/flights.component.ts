import { Component, OnInit } from '@angular/core';
import { myplane } from '../planeInt';
import { StaticmapService } from '../staticmap.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  gmbool: boolean = true;

  selectedAirport: string = '';

  selectedPlane: myplane = {icao24: "", time: 0, estDepartureAirport: ""}//, heigthdata: [], timedata: []};

  constructor(private maps: StaticmapService) { }

  ngOnInit(): void {
  }

  updateAirport(airport: string): void
  {
    // this.selectedAirport = '';
    this.selectedAirport = airport;
    // setTimeout(() => {
    // }, 1);
  }

  toggle(): void
  {
    this.gmbool = !this.gmbool;
  }

  // public graph = {
  //   data: [
  //       { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
  //       { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
  //   ],
  //   layout: {width: 320, height: 240, title: 'A Fancy Plot'}
  // };
}
