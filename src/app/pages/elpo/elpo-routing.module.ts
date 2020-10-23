import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElpoListComponent } from './elpo-list/elpo-list.component';
import { ElpoFormComponent } from './elpo-form/elpo-form.component';
import { ElpoPesqComponent } from './elpo-pesq/elpo-pesq.component';

const routes: Routes = [
  { path: '', component: ElpoListComponent },
  { path: 'pesq-elpo', component: ElpoPesqComponent },
  { path: 'new', component: ElpoFormComponent },
  { path: ':id/edit', component: ElpoFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElpoRoutingModule { }
