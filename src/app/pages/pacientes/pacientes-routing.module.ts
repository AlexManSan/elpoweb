import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PacientesListComponent } from './pacientes-list/pacientes-list.component';
import { PacientesFormComponent } from './pacientes-form/pacientes-form.component';

const routes: Routes = [
  { path: '', component: PacientesListComponent },
  { path: 'new', component: PacientesFormComponent },
  { path: ':id/edit', component: PacientesFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientesRoutingModule { }
