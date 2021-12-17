import { Component, OnChanges, OnInit, SimpleChanges, Input } from '@angular/core';
import { PlanedataService } from '../planedata.service';
import {decode, encode} from '@mapbox/polyline';

@Component({
  selector: 'app-flight-graph',
  templateUrl: './flight-graph.component.html',
  styleUrls: ['./flight-graph.component.scss']
})
export class FlightGraphComponent implements OnChanges {

  @Input() plane?: {icao24: string, time: number};

  path_arr: [number, number][] = [];

  path: string = "";
  
  constructor(private planedata: PlanedataService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.planedata.getData(this.plane!.icao24,this.plane!.time).subscribe(resp => {
        console.log(resp)
        resp.path.forEach(item => {
          console.log(item[1], item[2]);
          this.path_arr.push([item[1], item[2]])
        });

        console.log(this.path)
        this.path = encode(this.path_arr);
        console.log(this.path)
      });
  }

}
