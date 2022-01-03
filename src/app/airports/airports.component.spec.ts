import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportsComponent } from './airports.component';

describe('AirportsComponent', () => {
  let component: AirportsComponent;
  let fixture: ComponentFixture<AirportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly choose airport', () => {
    component.lis = [];
    let li = component.renderer.createElement("li") as HTMLLIElement;
    li.innerText = "Test"
    component.lis.push(li);
    component.index = 0;

    // spy on event emitter
    spyOn(component.select, 'emit');
 
    component.choose(new Event("click"), component.index)
    
    expect(component.select.emit).toHaveBeenCalledWith('Test');
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
