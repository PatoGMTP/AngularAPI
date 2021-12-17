import { Component, OnInit, SimpleChanges, Input, OnChanges } from '@angular/core';
import { AirportdataService } from '../airportdata.service';
import { myplane } from '../planeInt';

@Component({
  selector: 'app-stats-graph',
  templateUrl: './stats-graph.component.html',
  styleUrls: ['./stats-graph.component.scss']
})
export class StatsGraphComponent implements OnChanges {

  graph?:any = null;

  src: string = '';

  @Input() gmbool!: boolean;

  @Input() airport!: string;

  locations: [string[], number[]] = [[], []];

  dict: {name: string, count: number}[] = [];

  constructor(private airdata: AirportdataService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getData();
  }

  getData(): void
  {
    console.log("thinking...")
    this.airdata.getData(this.airport!).subscribe(resp => {
      this.locations = [[],[]]
      this.dict = []
      // let icaos: string[] = resp.map(item => item.icao24)
      // console.log(icaos)
      // this.planes = icaos
      // setTimeout(() => {
      //   this.lis[this.index].focus();
      // }, 1);
      // this.fulldata = resp
      // console.log(this.fulldata);
      // console.log(resp)
      for (const item of resp)
      {
        let temp = item['estDepartureAirport'];
        if (this.dict[temp]) this.dict[temp].count++
        else this.dict[temp] = {name: temp, count: 1};
      }

      console.log(Object.values(this.dict));

      for (const item of Object.values(this.dict))
      {
        if (item.name === null) continue;
        this.locations[0].push(item.name);
        this.locations[1].push(item.count);
      }

      console.log(this.locations)
  
      this.graph = {
        data: [
            { x: this.locations[0], y: this.locations[1], type: 'bar'},
        ],
        layout: {width: 800, height: 500, title: this.airport}
      };
    });
    console.log("waiting...")
  }

}
