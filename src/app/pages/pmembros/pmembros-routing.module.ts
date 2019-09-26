import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PmembroListComponent } from './pmembro-list/pmembro-list.component';
import { PmembroFormComponent } from './pmembro-form/pmembro-form.component';

const routes: Routes = [
  { path: '', component: PmembroListComponent },
  { path: 'new', component: PmembroFormComponent },
  { path: ':id/edit', component: PmembroFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PmembrosRoutingModule { }
