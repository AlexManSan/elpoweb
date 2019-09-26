import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TpposcirurgicaListComponent } from './tpposcirurgica-list/tpposcirurgica-list.component';
import { TpposcirurgicaFormComponent } from './tpposcirurgica-form/tpposcirurgica-form.component';
import { TpposcirurgicasRoutingModule } from './tpposcirurgicas-routing.module';

@NgModule({
  imports: [
    SharedModule,
    TpposcirurgicasRoutingModule
  ],
  declarations: [TpposcirurgicaListComponent, TpposcirurgicaFormComponent]
})
export class TpposcirurgicasModule { }
