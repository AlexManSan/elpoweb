import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IpacienteListComponent } from './ipaciente-list/ipaciente-list.component';
import { IpacienteFormComponent } from './ipaciente-form/ipaciente-form.component';

const routes: Routes = [
  { path: '', component: IpacienteListComponent },
  { path: 'new', component: IpacienteFormComponent },
  { path: ':id/edit', component: IpacienteFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IpacientesRoutingModule { }
