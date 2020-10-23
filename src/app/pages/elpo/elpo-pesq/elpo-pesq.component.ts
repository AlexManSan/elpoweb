import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ElpoService } from '../shared/elpo.service';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { Elpo } from '../shared/elpo.model';
import { Recomendacoes } from '../../recomendacoes/shared/recomendacoes.model';
import { RecomendacoesService } from '../../recomendacoes/shared/recomendacoes.service';

@Component({
  selector: 'app-elpo-pesq',
  templateUrl: './elpo-pesq.component.html',
  styleUrls: ['./elpo-pesq.component.css']
})
export class ElpoPesqComponent implements OnInit {
  
  pesqForm: FormGroup;
  protected formBuilder: FormBuilder;
  resources: Elpo[] = [];
  recomendacoes: Recomendacoes[] = [];

  constructor(
    private service: ElpoService,
    private serviceRec: RecomendacoesService
    ){ }

   ngOnInit() {
    console.log("página de pesquisa da Elpo.");
    this.criarForm();
  }

  private criarForm(){
    this.pesqForm = new FormGroup({
      prontuario: new FormControl('', [Validators.required])
    });
  }

  public pesquisar(){
    let c = this.pesqForm.controls['prontuario'].value;
    // isNaN(123)         // false, então é numerico
    // isNaN('123')       // false então só contém numeros
    // isNaN('teste')     // verdadeiro, não contém números
    // isNaN('999teste')  // vardadeiro, contém números e letras

    if(isNaN(c) === false){
      // console.log("é numero");
      this.pesquisaProntuario();
    }else{
      // console.log("não é numero");
      this.pesquisaPaciente();
    }
  }

  public recomendar(elpo: Elpo){
    let tpPosCir = elpo.tpPosicaoCirurgica;
    // console.log("tenho o tipo de posição cirúrgica: " + tpPosCir.descricao);

    this.serviceRec.getByTpPosicaoCirurgica(tpPosCir.id).subscribe(
      rec => this.recomendacoes = rec,
      error => alert('Recomendações não encontrada.')
    );
  }

  private pesquisaProntuario(){
    let pront = this.pesqForm.controls['prontuario'].value;
    // console.log("Prontuário digitado: "+ pront);

    this.service.getByProntuario(pront).subscribe(
      // resources => this.resources = resources.sort((a,b) => b.id - a.id),
      resources => this.resources = resources,
    error => alert('Prontuário não encontrado.')
    );
  }

  private pesquisaPaciente(){
    let usuario = this.pesqForm.controls['prontuario'].value;
    // console.log("Usuário digitado: "+ usuario);

    this.service.getByUsuario(usuario).subscribe(
      // resources => this.resources = resources.sort((a,b) => b.id - a.id),
      resources => this.resources = resources,
    error => alert('Usuário não encontrado.')
    );
  }

}
