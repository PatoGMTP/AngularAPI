import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { PlanedataService } from '../planedata.service';

import { FlightGraphComponent } from './flight-graph.component';

describe('FlightGraphComponent', () => {
  let component: FlightGraphComponent;
  let fixture: ComponentFixture<FlightGraphComponent>;
  let planedata: PlanedataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightGraphComponent ],
      imports: [HttpClientTestingModule],
      providers: [PlanedataService],
    })
    .compileComponents();

    planedata = TestBed.inject(PlanedataService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get necessary data and create graph', fakeAsync( () => {
    component.plane = {icao24: "3c0c9e", time: 1641162797, estDepartureAirport: ""}

    let dummy: [number, number, number, number, boolean][] = [[0, 0, 0, 0, false]]
    let obj = {path: dummy};
    spyOn(planedata, "getData").and.returnValue(of(obj))
    
    component.getData();

    tick(100000);

    // expect(component.graph).toBeTruthy();

    // expect(planedata.getData).toHaveBeenCalled();
  }));
});
