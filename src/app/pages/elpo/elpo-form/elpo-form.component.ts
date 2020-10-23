import { Component, OnInit, Injector } from '@angular/core';
import { Elpo } from '../shared/elpo.model';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { ElpoService } from '../shared/elpo.service';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Tpposcirurgica } from '../../tpposcirurgicas/shared/tpposcirurgica.model';
import { TpposcirurgicaService } from '../../tpposcirurgicas/shared/tpposcirurgica.service';
import { Tpcirurgia } from '../../tpcirurgias/shared/tpcirurgia.model';
import { TpcirurgiaService } from '../../tpcirurgias/shared/tpcirurgia.service';
import { TpanestesiaService } from '../../tpanestesias/shared/tpanestedia.service';
import { SsuporteService } from '../../ssuportes/shared/ssuporte.service';
import { PmembroService } from '../../pmembros/shared/pmembro.service';
import { ComorbidadeService } from '../../comorbidades/shared/comorbidade.service';
import { IpacienteService } from '../../ipacientes/shared/ipaciente.service';
import { Tpanestesia } from '../../tpanestesias/shared/tpanestesia.model';
import { Ssuporte } from '../../ssuportes/shared/ssuporte.model';
import { Pmembro } from '../../pmembros/shared/pmembro.model';
import { Comorbidade } from '../../comorbidades/shared/comorbidade.model';
import { Paciente } from '../../pacientes/shared/paciente.model';
import { Ipaciente } from '../../ipacientes/shared/ipaciente.model';

@Component({
  selector: 'app-elpo-form',
  templateUrl: './elpo-form.component.html',
  styleUrls: ['./elpo-form.component.css']
})
export class ElpoFormComponent extends BaseResourceFormComponent<Elpo> implements OnInit{

  litpPosCirurgica: Array<Tpposcirurgica>;
  litpCirurgia: Array<Tpcirurgia>;
  litpAnestesia: Array<Tpanestesia>;
  lisuperficieSuporte: Array<Ssuporte>;
  liposicaoMembros: Array<Pmembro>;
  licomorbidade: Array<Comorbidade>;
  // elpo = new Elpo(); 
  novototscore: number; 

  constructor(
    protected servicoTpPosCirurgica: TpposcirurgicaService,
    protected servicoTpCirurgia: TpcirurgiaService,
    protected servicoTpAnestesia: TpanestesiaService,
    protected servicoSsuporte: SsuporteService,
    protected servicoPmembro: PmembroService,
    protected servicoComorbidade: ComorbidadeService,
    protected servicoIdadePaciente: IpacienteService,
    protected servico: ElpoService,
    protected injector: Injector
  ) { super(injector, new Elpo(), servico, Elpo.fromJson) }

  ngOnInit() {
    this.novototscore = 0;
    this.carregaTpPosicaoCirurgica();
    this.carregaTpCirurgia();
    this.carregaTpAnestesia();
    this.carregaComorbidade();
    this.carregaSuperficieSuporte();
    this.carregaPosicaoMembros();
    super.ngOnInit();
  }
  
  protected buildResourceForm() {
    // criando um formulário
    this.resourceForm = new FormGroup({
      id: new FormControl(''),
      data: new FormControl('', [Validators.required]),
      totalScore: new FormControl(''),
      risco: new FormControl(''),
      paciente: new FormGroup({
        // nome: new FormControl({value:'',disabled: true}),
        id: new FormControl(''),
        nome: new FormControl('',[Validators.required]),
        idade: new FormControl('',[Validators.required]),
        prontuario: new FormControl(''),
      }),
      // nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      // idade: new FormControl('', [Validators.required]),
      // prontuario: new FormControl(''),
      tpPosicaoCirurgica: new FormControl('', [Validators.required]),
      superficieSuporte: new FormControl('', [Validators.required]),
      tpCirurgia: new FormControl('', [Validators.required]),
      posicaoMembros: new FormControl('', [Validators.required]),
      tpAnestesia: new FormControl('', [Validators.required]),
      idadePaciente: new FormControl(''),
      comorbidade: new FormControl('', [Validators.required]),
    });
  }

  calculaTotalScoreESalva(){
    let totscore = this.resource.totalScore;
    let comor: Comorbidade = new Comorbidade();
    let pm: Pmembro = new Pmembro();
    let ss: Ssuporte = new Ssuporte();
    let ta: Tpanestesia = new Tpanestesia();
    let tc: Tpcirurgia = new Tpcirurgia();
    let tpc: Tpposcirurgica = new Tpposcirurgica();
    let pac: Paciente = new Paciente();
    let idpac: number = 0;
    comor = this.resourceForm.get('comorbidade').value;
    pm = this.resourceForm.get('posicaoMembros').value;
    ss = this.resourceForm.get('superficieSuporte').value;
    ta = this.resourceForm.get('tpAnestesia').value;
    tc = this.resourceForm.get('tpCirurgia').value;
    tpc = this.resourceForm.get('tpPosicaoCirurgica').value;
    pac = this.resourceForm.get('paciente').value;

    this.novototscore += comor.score;
    this.novototscore += pm.score;
    this.novototscore += ss.score;
    this.novototscore += ta.score;
    this.novototscore += tc.score;
    this.novototscore += tpc.score;
    idpac += this.calcScoreIdade(pac);
    this.novototscore += idpac;
    
    console.log("Total de Score Antes de Alterar: " + totscore);
    console.log("Score Comorbidade: " + comor.score);
    console.log("Score Posição dos Membros: " + pm.score);
    console.log("Score Superficie de Suporte: " + ss.score);
    console.log("Score Tipo de Anestesia: " + ta.score);
    console.log("Score Tipo Cirurgia: " + tc.score);
    console.log("Score Tipo de Posição Cirurgica: " + tpc.score);
    console.log("Score idade paciente: " + idpac);
    console.log("Total de Score Novo: " + this.novototscore);
    
    //formas de setar valor em item do formcontrol 
    // 1) this.form.controls['dept'].setValue(selected.id);
    // 2) this.form.patchValue({id: selected.id})
    this.resourceForm.controls['totalScore'].setValue(this.novototscore);
    console.log("Ajustado no formulário: " + this.resourceForm.get('totalScore').value);
    this.identificaRisco();
    this.submitForm();
  }

  /**
   * Falta implementar a alteração do objeto de idade 
   * @param paciente
   */
  private calcScoreIdade(paciente: Paciente){
    // console.log("Idade:" + this.paciente.idade);
    let idadep: Ipaciente = new Ipaciente();
    if(paciente.idade >=18 && paciente.idade <= 39){
      //score =1
      idadep.id = 1;
      idadep.idade = "Entre 18 e 39 anos";
      idadep.score = 1;
    }
    if(paciente.idade >=40 && paciente.idade <= 59){
      // score = 2
      idadep.id = 2;
      idadep.idade = "Entre 40 e 59 anos";
      idadep.score = 2;
    }
    if(paciente.idade >=60 && paciente.idade <= 69){
      // score = 3
      idadep.id = 3;
      idadep.idade = "Entre 60 e 69 anos";
      idadep.score = 3;
    }
    if(paciente.idade >=70 && paciente.idade <= 79){
      // score = 4 
      idadep.id = 4;
      idadep.idade = "Entre 70 e 79 anos";
      idadep.score = 4;
    }
    if(paciente.idade >=80){
      // score = 5
      idadep.id = 5;
      idadep.idade = "> 80 anos";
      idadep.score = 5;
    }
    this.resourceForm.controls['idadePaciente'].setValue(idadep);
    return idadep.score;
  }

  private identificaRisco(){
    //formas de setar valor em item do formcontrol 
    // 1) this.form.controls['dept'].setValue(selected.id);
    // 2) this.form.patchValue({id: selected.id})
    if(this.novototscore <= 19){
      this.resourceForm.controls['risco'].setValue("Baixo");
    }else{
      this.resourceForm.controls['risco'].setValue("Alto");
    }
  }

  protected carregaPosicaoMembros(){
    this.servicoPmembro.getAll().subscribe(
      regs => this.liposicaoMembros = regs
    );
  }

  protected carregaSuperficieSuporte(){
    this.servicoSsuporte.getAll().subscribe(
      regs => this.lisuperficieSuporte = regs
    );
  }

  protected carregaComorbidade(){
    this.servicoComorbidade.getAll().subscribe(
      regs => this.licomorbidade = regs
    );
  }

  protected carregaTpAnestesia(){
    this.servicoTpAnestesia.getAll().subscribe(
      regs => this.litpAnestesia = regs
    );
  }

  protected carregaTpCirurgia(){
    this.servicoTpCirurgia.getAll().subscribe(
      regs => this.litpCirurgia = regs
    );
  }

  protected carregaTpPosicaoCirurgica(){
    this.servicoTpPosCirurgica.getAll().subscribe(
      regs => this.litpPosCirurgica = regs
    );
  }

  protected createPageTitle(): string {
    return 'Cadastro de Novo regitro ELPO';
  }

  protected editionPageTitle(): string {
    const resourceName = this.resource.paciente || '';
    // return 'Editando Comorbidade: ' +resourceName;
    return 'Editando Registro ELPO: ';
  }

}
