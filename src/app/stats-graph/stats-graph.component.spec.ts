import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpResponse } from '@angular/common/http';

import { StatsGraphComponent } from './stats-graph.component';
import { AirportdataService } from '../airportdata.service';

describe('StatsGraphComponent', () => {
  let component: StatsGraphComponent;
  let fixture: ComponentFixture<StatsGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsGraphComponent ],
      providers: [AirportdataService],
      imports: [HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get necessary data and create graph', () => {
    component.airport = "EDDF"
    component.getData();

    setTimeout(() => {
      expect(component.graph.data).toBeTruthy();
    }, 1000);
  });
});
