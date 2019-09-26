import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TpcirurgiaListComponent } from './tpcirurgia-list/tpcirurgia-list.component';
import { TpcirurgiaFormComponent } from './tpcirurgia-form/tpcirurgia-form.component';

const routes: Routes = [
  { path: '', component: TpcirurgiaListComponent },
  { path: 'new', component: TpcirurgiaFormComponent },
  { path: ':id/edit', component: TpcirurgiaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TpcirurgiasRoutingModule { }
