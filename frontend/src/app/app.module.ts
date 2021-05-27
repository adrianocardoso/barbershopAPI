import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarberComponent } from './barber/barber.component';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { AddScheduleComponent } from './scheduling/add-schedule/add-schedule.component';
import { ShowScheduleComponent } from './scheduling/show-schedule/show-schedule.component';
import { AddBarberComponent } from './barber/add-barber/add-barber.component';
import { ShowBarberComponent } from './barber/show-barber/show-barber.component';
import {SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BarberComponent,
    SchedulingComponent,
    AddScheduleComponent,
    ShowScheduleComponent,
    AddBarberComponent,
    ShowBarberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
