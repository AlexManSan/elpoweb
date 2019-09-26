import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SsuporteListComponent } from './ssuporte-list/ssuporte-list.component';
import { SsuporteFormComponent } from './ssuporte-form/ssuporte-form.component';

const routes: Routes = [
  { path: '', component: SsuporteListComponent },
  { path: 'new', component: SsuporteFormComponent },
  { path: ':id/edit', component: SsuporteFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SsuportesRoutingModule { }
