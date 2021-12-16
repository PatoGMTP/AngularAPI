import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsComponent } from './flights/flights.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
  {path:"flights", component:FlightsComponent},
  {path:"stats", component:StatsComponent},
  {path:"", redirectTo:"flights", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
