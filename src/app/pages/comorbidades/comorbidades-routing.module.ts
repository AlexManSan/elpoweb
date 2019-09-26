import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComorbidadeListComponent } from './comorbidade-list/comorbidade-list.component';
import { ComorbidadeFormComponent } from './comorbidade-form/comorbidade-form.component';

const routes: Routes = [
  { path: '', component: ComorbidadeListComponent },
  { path: 'new', component: ComorbidadeFormComponent },
  { path: ':id/edit', component: ComorbidadeFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComorbidadesRoutingModule { }
