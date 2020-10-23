import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { ElpoRoutingModule } from './elpo-routing.module';
import { ElpoFormComponent } from './elpo-form/elpo-form.component';
import { ElpoListComponent } from './elpo-list/elpo-list.component';
import {CalendarModule} from 'primeng/calendar';
import { ElpoPesqComponent } from './elpo-pesq/elpo-pesq.component';

@NgModule({
  imports: [
    SharedModule,
    ElpoRoutingModule,
    CalendarModule,
  ],
  declarations: [ElpoListComponent, ElpoFormComponent, ElpoPesqComponent]
})
export class ElpoModule { }
