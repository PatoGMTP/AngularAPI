import { Component, OnChanges, OnInit, SimpleChanges, Input } from '@angular/core';
import { PlanedataService } from '../planedata.service';
import { StaticmapService } from '../staticmap.service';
import {decode, encode} from '@mapbox/polyline';
import { myplane } from '../planeInt';

@Component({
  selector: 'app-flight-graph',
  templateUrl: './flight-graph.component.html',
  styleUrls: ['./flight-graph.component.scss']
})
export class FlightGraphComponent implements OnChanges {

  @Input() gmbool!: boolean;

  @Input() airport!: string;

  @Input() plane!: myplane;

  path_arr: [number, number][] = [];

  height_data: number[] = [];

  time_data: number[] = []

  path: string = "";

  src: string = '';
  
  constructor
  (
    private planedata: PlanedataService,
    private staticmaps: StaticmapService,
  ) { }

  ngOnInit(): void {
  }

  graph?:any = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['plane'])
    {
      console.log(changes)
      this.planedata.getData(this.plane!.icao24,this.plane!.time).subscribe(resp => {
        this.height_data = [];
        this.time_data = [];
        this.path_arr = [];
        let temptime = resp.path[resp.path.length-1][0]
        
        resp.path.forEach(item => {
          this.path_arr.push([item[2], item[1]])
          this.height_data.push(item[3]);
          this.time_data.push((item[0]-temptime)/(60*24));
        });
  
        this.src = this.staticmaps.getData(this.path_arr, this.path_arr[0], this.airport);
  
        this.graph = {
          data: [
              { x: this.time_data, y: this.height_data, type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
          ],
          layout: {width: 800, height: 500, title: this.airport + " : " + this.plane.icao24}
        };
      });
    }
  }

  

}
