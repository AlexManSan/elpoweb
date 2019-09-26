import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TpanestesiaListComponent } from './tpanestesia-list/tpanestesia-list.component';
import { TpanestesiaFormComponent } from './tpanestesia-form/tpanestesia-form.component';

const routes: Routes = [
  { path: '', component: TpanestesiaListComponent },
  { path: 'new', component: TpanestesiaFormComponent },
  { path: ':id/edit', component: TpanestesiaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TpanestesiasRoutingModule { }
