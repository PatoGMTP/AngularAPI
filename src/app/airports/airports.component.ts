import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.scss']
})
export class AirportsComponent implements OnInit {

  @Output() select = new EventEmitter();

  @ViewChild('table') table!: ElementRef;

  index: number = 0;

  ul!: HTMLUListElement;

  lis!: HTMLLIElement[];

  airports: string[] = [
    "EDDF", "EGLL", "LIRF", "UUEE"
  ];

  constructor() { }

  ngOnInit(): void
  {
    // console.log("airports", this.table)
  }

  ngAfterViewInit(): void
  {
    // console.log("airports", this.table)

    this.ul = this.table.nativeElement;
    this.lis = this.ul.children as unknown as HTMLLIElement[];
    this.lis[this.index].focus();
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

    this.select.emit(this.lis[this.index].innerText);
  }
}
