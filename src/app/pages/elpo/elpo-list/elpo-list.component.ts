import { Component, OnInit } from '@angular/core';
import { Elpo } from '../shared/elpo.model';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { ElpoService } from '../shared/elpo.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Recomendacoes } from '../../recomendacoes/shared/recomendacoes.model';
import { RecomendacoesService } from '../../recomendacoes/shared/recomendacoes.service';

@Component({
  selector: 'app-elpo-list',
  templateUrl: './elpo-list.component.html',
  styleUrls: ['./elpo-list.component.css']
})
export class ElpoListComponent extends BaseResourceListComponent<Elpo> implements OnInit {

  recomendacoes: Recomendacoes[] = [];
  constructor(
    private service: ElpoService,
    private serviceRec: RecomendacoesService
    ){
    super(service);
   }

   ngOnInit() {
    super.ngOnInit();
  }

  public recomendar(elpo: Elpo){
    let tpPosCir = elpo.tpPosicaoCirurgica;
    // console.log("tenho o tipo de posição cirúrgica: " + tpPosCir.descricao);

    this.serviceRec.getByTpPosicaoCirurgica(tpPosCir.id).subscribe(
      rec => this.recomendacoes = rec,
      error => alert('Recomendações não encontrada.')
    );
  }
}
