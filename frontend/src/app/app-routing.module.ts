import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BarberComponent} from './barber/barber.component';
import {AddBarberComponent} from './barber/add-barber/add-barber.component';
import {SchedulingComponent} from './scheduling/scheduling.component';

const routes: Routes = [
  {path: 'barbeiro', component: BarberComponent},
  {path: 'adicionar-barbeiro', component: AddBarberComponent},
  {path: 'auth', component: AddBarberComponent},
  {path: 'agendamentos', component: SchedulingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
