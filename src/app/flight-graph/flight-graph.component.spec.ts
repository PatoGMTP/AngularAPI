import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightGraphComponent } from './flight-graph.component';

describe('FlightGraphComponent', () => {
  let component: FlightGraphComponent;
  let fixture: ComponentFixture<FlightGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
