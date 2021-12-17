import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';

PlotlyModule.plotlyjs = PlotlyJS;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightsComponent } from './flights/flights.component';
import { StatsComponent } from './stats/stats.component';
import { AirportsComponent } from './airports/airports.component';
import { PlanesComponent } from './planes/planes.component';
import { FlightGraphComponent } from './flight-graph/flight-graph.component';
import { StatsGraphComponent } from './stats-graph/stats-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    StatsComponent,
    AirportsComponent,
    PlanesComponent,
    FlightGraphComponent,
    StatsGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PlotlyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
