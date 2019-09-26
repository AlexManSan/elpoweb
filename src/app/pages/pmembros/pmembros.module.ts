import { NgModule } from '@angular/core';

import { PmembroListComponent } from './pmembro-list/pmembro-list.component';
import { PmembroFormComponent } from './pmembro-form/pmembro-form.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { PmembrosRoutingModule } from './pmembros-routing.module';

@NgModule({
  imports: [
    SharedModule,
    PmembrosRoutingModule
  ],
  declarations: [PmembroListComponent, PmembroFormComponent],
})
export class PmembrosModule { }
