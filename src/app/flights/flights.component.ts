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

  selectedPlane: myplane = {icao24: "", time: 0, estDepartureAirport: ""}

  constructor(private maps: StaticmapService) { }

  ngOnInit(): void {
  }

  updateAirport(airport: string): void
  {
    this.selectedAirport = airport;
  }

  toggle(): void
  {
    this.gmbool = !this.gmbool;
  }
}
