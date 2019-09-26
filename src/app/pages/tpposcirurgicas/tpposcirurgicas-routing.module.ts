import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TpposcirurgicaListComponent } from './tpposcirurgica-list/tpposcirurgica-list.component';
import { TpposcirurgicaFormComponent } from './tpposcirurgica-form/tpposcirurgica-form.component';

const routes: Routes = [
  { path: '', component: TpposcirurgicaListComponent },
  { path: 'new', component: TpposcirurgicaFormComponent },
  { path: ':id/edit', component: TpposcirurgicaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TpposcirurgicasRoutingModule { }
