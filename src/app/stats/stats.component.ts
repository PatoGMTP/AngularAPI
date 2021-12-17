import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  gmbool: boolean = true;

  selectedAirport: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  updateAirport(airport: string): void
  {
    this.selectedAirport = airport;
  }

}
