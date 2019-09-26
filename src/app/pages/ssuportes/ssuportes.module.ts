import { NgModule } from '@angular/core';
import { SsuporteListComponent } from './ssuporte-list/ssuporte-list.component';
import { SsuporteFormComponent } from './ssuporte-form/ssuporte-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SsuportesRoutingModule } from './ssuportes-routing.module';

@NgModule({
  imports: [
    SharedModule,
    SsuportesRoutingModule
  ],
  declarations: [SsuporteListComponent, SsuporteFormComponent],
})
export class SsuportesModule { }
