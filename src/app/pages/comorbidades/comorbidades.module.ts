import { NgModule } from '@angular/core';
import { ComorbidadeListComponent } from './comorbidade-list/comorbidade-list.component';
import { ComorbidadeFormComponent } from './comorbidade-form/comorbidade-form.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { ComorbidadesRoutingModule } from './comorbidades-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ComorbidadesRoutingModule
  ],
  declarations: [ComorbidadeListComponent, ComorbidadeFormComponent]
})
export class ComorbidadesModule { }
