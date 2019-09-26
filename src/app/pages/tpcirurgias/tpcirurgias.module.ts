import { NgModule } from '@angular/core';
import { TpcirurgiaListComponent } from './tpcirurgia-list/tpcirurgia-list.component';
import { TpcirurgiaFormComponent } from './tpcirurgia-form/tpcirurgia-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TpcirurgiasRoutingModule } from './tpcirurgias-routing.module';

@NgModule({
  imports: [
    SharedModule,
    TpcirurgiasRoutingModule
  ],
  declarations: [TpcirurgiaListComponent, TpcirurgiaFormComponent],
})
export class TpcirurgiasModule { }
