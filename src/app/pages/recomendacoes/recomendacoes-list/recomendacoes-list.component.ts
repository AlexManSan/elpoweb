import { Component } from '@angular/core';
import { Recomendacoes } from '../shared/recomendacoes.model';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { RecomendacoesService } from '../shared/recomendacoes.service';

@Component({
  selector: 'app-recomendacoes-list',
  templateUrl: './recomendacoes-list.component.html',
  styleUrls: ['./recomendacoes-list.component.css']
})
export class RecomendacoesListComponent extends BaseResourceListComponent<Recomendacoes> {

  constructor(private service: RecomendacoesService){
    super(service);
   }
  
}
