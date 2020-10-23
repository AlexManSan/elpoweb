import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecomendacoesRoutingModule } from './recomendacoes-routing.module';
import { RecomendacoesListComponent } from './recomendacoes-list/recomendacoes-list.component';
import { RecomendacoesFormComponent } from './recomendacoes-form/recomendacoes-form.component';

@NgModule({
  imports: [
    SharedModule,
    RecomendacoesRoutingModule
  ],
  declarations: [RecomendacoesListComponent, RecomendacoesFormComponent]
})
export class RecomendacoesModule { }
