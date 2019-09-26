import { NgModule } from '@angular/core';
import { TpanestesiaListComponent } from './tpanestesia-list/tpanestesia-list.component';
import { TpanestesiaFormComponent } from './tpanestesia-form/tpanestesia-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TpanestesiasRoutingModule } from './tpanestesias-rounting.module';

@NgModule({
  imports: [
    SharedModule,
    TpanestesiasRoutingModule
  ],
  declarations: [TpanestesiaListComponent, TpanestesiaFormComponent],
})
export class TpanestesiasModule { }
