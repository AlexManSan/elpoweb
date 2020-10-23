import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { PacientesRoutingModule } from './pacientes-routing.module';
import { PacientesListComponent } from './pacientes-list/pacientes-list.component';
import { PacientesFormComponent } from './pacientes-form/pacientes-form.component';

@NgModule({
  imports: [
    SharedModule,
    PacientesRoutingModule
  ],
  declarations: [PacientesListComponent, PacientesFormComponent],
})
export class PacientesModule { }
