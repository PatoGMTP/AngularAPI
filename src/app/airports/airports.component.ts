import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.scss']
})
export class AirportsComponent implements OnInit {

  @ViewChild('table') table!: ElementRef;

  index: number = 0;

  ul!: HTMLSelectElement;

  lis!: HTMLOptionElement[];

  airports: string[] = ["IAH", "BHM", "HSV", "BHM", "HSV", "BHM", "HSV", "BHM", "HSV", "BHM", "HSV", "BHM", "HSV", "BHM", "HSV", "BHM", "HSV"];

  constructor() { }

  ngOnInit(): void
  {
    console.log("airports", this.table)
  }

  ngAfterViewInit(): void
  {
    console.log("airports", this.table)

    this.ul = this.table.nativeElement;
    this.lis = this.ul.children as unknown as HTMLOptionElement[];
    this.lis[this.index].focus();
  }

  readup(event: any): void
  {
    console.log(event);
    // event.preventDefault();
    // if (this.index != 0)
    // {
    //   this.index--;
    //   this.lis[this.index].focus();
    // }
  }

  readdown(event: Event): void
  {
    console.log(event);
    // event.preventDefault();
    // if (this.index != this.lis.length-1)
    // {
    //   this.index++;
    //   this.lis[this.index].focus();
    // }
  }

  choose(event: Event, index: number): void
  {
    console.log(event);
    // event.preventDefault();
    // event.stopPropagation();
    // this.index = index;
    // setTimeout(() => {
    //   this.lis[this.index].focus();
    //   console.log(index);
    // }, 100);
  }
}
