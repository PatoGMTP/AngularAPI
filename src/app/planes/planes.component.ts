import { Component, OnInit, ViewChild, Input, Output, EventEmitter, OnChanges, SimpleChanges, Renderer2 } from '@angular/core';
import { AirportdataService } from '../airportdata.service';
import { myplane } from '../planeInt';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.scss']
})
export class PlanesComponent implements OnChanges {

  @Output() select = new EventEmitter();

  @Input() airport?: string;

  @ViewChild('table') table: any;

  index: number = 0;

  ul!: HTMLUListElement;

  lis!: HTMLLIElement[];

  fulldata?: {icao24: string, estDepartureAirport: string, lastSeen: number}[];

  planes?: string[];

  constructor(private airdata: AirportdataService, public renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getData();
  }

  ngAfterViewInit(): void
  {
    this.ul = this.table.nativeElement;
    this.lis = this.ul.children as unknown as HTMLLIElement[];
  }

  getData(): void
  {
    this.airdata.getData(this.airport!).subscribe(resp => {
      let icaos: string[] = resp.map(item => item.icao24)
      console.log(icaos)
      this.planes = icaos
      setTimeout(() => {
        this.lis[this.index].focus();
      }, 1);
      this.fulldata = resp
      console.log(this.fulldata);
    });
  }

  readup(event: any): void
  {
    event.preventDefault();

    if (this.index != 0) this.index--;
    this.lis[this.index].focus();
  }

  readdown(event: Event): void
  {
    event.preventDefault();

    if (this.index != this.lis.length-1) this.index++;
    this.lis[this.index].focus();
  }

  choose(event: Event, index: number = -1): void
  {
    event.preventDefault();

    if (index !== -1) this.index = index;
    this.lis[this.index].focus();

    let output: myplane = {
      icao24: this.lis[this.index].innerText,
      time: this.fulldata![this.index].lastSeen-600,
      estDepartureAirport: this.fulldata![this.index].estDepartureAirport}

    this.select.emit(output);
  }
}
