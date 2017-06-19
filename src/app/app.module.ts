import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AllDataComponent } from './all-data/all-data.component';
import { GenreAndYearComponent } from './genre-and-year/genre-and-year.component';
import { OrderNumberComponent } from './order-number/order-number.component';
import { HeaderComponent } from './header/header.component';
import {MyListService} from '../service/my-list.service';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AllDataComponent,
    GenreAndYearComponent,
    OrderNumberComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [MyListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
