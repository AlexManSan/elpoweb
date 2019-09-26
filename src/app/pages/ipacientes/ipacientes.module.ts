import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { IpacienteListComponent } from './ipaciente-list/ipaciente-list.component';
import { IpacienteFormComponent } from './ipaciente-form/ipaciente-form.component';
import { IpacientesRoutingModule } from './ipacientes-routing.module';

@NgModule({
  imports: [
    SharedModule,
    IpacientesRoutingModule
  ],
  declarations: [IpacienteListComponent, IpacienteFormComponent],
})
export class IpacientesModule { }
