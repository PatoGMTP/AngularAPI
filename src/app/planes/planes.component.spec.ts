import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AirportdataService } from '../airportdata.service';

import { PlanesComponent } from './planes.component';

describe('PlanesComponent', () => {
  let component: PlanesComponent;
  let fixture: ComponentFixture<PlanesComponent>;
  let aiport: AirportdataService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanesComponent ],
      imports: [HttpClientTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get necessary data', () => {
    component.planes = [];
    component.airport = "EDDF"
    component.getData();

    setTimeout(() => {
      expect(component.planes?.length).toBeGreaterThan(0);
    }, 1000);
  });

  it('should correctly choose airplane', () => {
    component.lis = [];
    let li = component.renderer.createElement("li") as HTMLLIElement;
    li.innerText = "Test"
    component.lis.push(li);
    component.index = 0;
    let obj = {icao24: "", lastSeen: 0, estDepartureAirport: ""};

    component.fulldata = [obj]

    // spy on event emitter
    spyOn(component.select, 'emit');
 
    component.choose(new Event("click"), component.index)
    
    expect(component.select.emit).toHaveBeenCalledWith({icao24: "Test", time: -600, estDepartureAirport: ""});
  });

  it('should correctly read keyboard inputs', () => {
    let li1 = component.renderer.createElement("li") as HTMLLIElement;
    let li2 = component.renderer.createElement("li") as HTMLLIElement;
    let li3 = component.renderer.createElement("li") as HTMLLIElement;
    li1.innerText = "Test1"
    li2.innerText = "Test2"
    li3.innerText = "Test3"
    component.lis = [li1, li2, li3]
    component.index = 0;

    component.readup(new Event("Click"));
    
    expect(component.index).toEqual(0)

    component.readdown(new Event("Click"));
    
    expect(component.index).toEqual(1)

    component.readdown(new Event("Click"));
    
    expect(component.index).toEqual(2)

    component.readdown(new Event("Click"));
    
    expect(component.index).toEqual(2)

    component.readup(new Event("Click"));
    
    expect(component.index).toEqual(1)
  });
});
