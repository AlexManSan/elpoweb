import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecomendacoesListComponent } from './recomendacoes-list/recomendacoes-list.component';
import { RecomendacoesFormComponent } from './recomendacoes-form/recomendacoes-form.component';

const routes: Routes = [
  { path: '', component: RecomendacoesListComponent },
  { path: 'new', component: RecomendacoesFormComponent },
  { path: ':id/edit', component: RecomendacoesFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecomendacoesRoutingModule { }
