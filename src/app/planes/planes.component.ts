import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.scss']
})
export class PlanesComponent implements OnInit {

  @ViewChild('table') table: any;

  planes: string[] = Array.from(Array(30).keys()).map(item => item.toString());

  constructor() { }

  ngOnInit(): void {
    console.log("planes", this.table)
  }

  ngAfterViewInit(): void
  {
    console.log("planes", this.table)
  }
}
