/**
 * Created by papushe on 16/06/2017.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import {AllDataComponent} from './all-data/all-data.component';
import {GenreAndYearComponent} from './genre-and-year/genre-and-year.component';
import {OrderNumberComponent} from './order-number/order-number.component';



const appRouts: Routes = [
  {path: '', redirectTo: '/all-data', pathMatch: 'full'},
  {path: 'all-data', component: AllDataComponent},
  {path: 'genre-and-year', component: GenreAndYearComponent},
  {path: 'order-number', component: OrderNumberComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRouts)],
  exports: [RouterModule]
})

export  class AppRoutingModule {}
