import { Component, OnInit, Injector } from '@angular/core';
import { Recomendacoes } from '../shared/recomendacoes.model';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { RecomendacoesService } from '../shared/recomendacoes.service';
import { Validators } from '@angular/forms';
import { Tpposcirurgica } from '../../tpposcirurgicas/shared/tpposcirurgica.model';
import { TpposcirurgicaService } from '../../tpposcirurgicas/shared/tpposcirurgica.service';

@Component({
  selector: 'app-recomendacoes-form',
  templateUrl: './recomendacoes-form.component.html',
  styleUrls: ['./recomendacoes-form.component.css']
})
export class RecomendacoesFormComponent extends BaseResourceFormComponent<Recomendacoes> implements OnInit {

  public litpPosCirurgica: Array<Tpposcirurgica>;

  constructor(
    protected servicoTpPosCirurgica: TpposcirurgicaService,
    protected servico: RecomendacoesService,
    protected injector: Injector
  ) { super(injector, new Recomendacoes(), servico, Recomendacoes.fromJson) }

  ngOnInit() {
    this.carregaTpPosicaoCirurgica();
    super.ngOnInit();
  }

  protected carregaTpPosicaoCirurgica(){
    this.servicoTpPosCirurgica.getAll().subscribe(
      tpposcirurgicas => this.litpPosCirurgica = tpposcirurgicas
    );
  }

  protected buildResourceForm() {
    // criando um formulário
    this.resourceForm = this.formBuilder.group({
      id: [null],
      regiaoCorpo: [null, [Validators.required, Validators.minLength(3)]],
      recomendacoes: [null, [Validators.required]],
      tpPosicaoCirurgica: [null, [Validators.required]],
    });
  }

  protected createPageTitle(): string {
    return 'Cadastro de Nova Recomendação';
  }

  protected editionPageTitle(): string {
    const resourceName = this.resource.recomendacoes || '';
    // return 'Editando Comorbidade: ' +resourceName;
    return 'Editando Recomendação: ';
  }

}
