import { Component, OnInit } from '@angular/core';
import { StaticmapService } from '../staticmap.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  selectedAirport: string = '';

  selectedPlane: {icao24: string, time: number} = {icao24: "", time: 0};

  constructor(private maps: StaticmapService) { }

  ngOnInit(): void {
    this.maps.getData();
  }

  updateAirport(airport: string): void
  {
    // this.selectedAirport = '';
    this.selectedAirport = airport;
    // setTimeout(() => {
    // }, 1);
  }
}
