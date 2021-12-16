import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightsComponent } from './flights/flights.component';
import { StatsComponent } from './stats/stats.component';
import { AirportsComponent } from './airports/airports.component';
import { PlanesComponent } from './planes/planes.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    StatsComponent,
    AirportsComponent,
    PlanesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
