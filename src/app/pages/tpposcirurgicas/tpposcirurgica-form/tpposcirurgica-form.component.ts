import { Component, OnInit, Injector } from '@angular/core';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { Tpposcirurgica } from '../shared/tpposcirurgica.model';
import { TpposcirurgicaService } from '../shared/tpposcirurgica.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-tpposcirurgica-form',
  templateUrl: './tpposcirurgica-form.component.html',
  styleUrls: ['./tpposcirurgica-form.component.css']
})
export class TpposcirurgicaFormComponent extends BaseResourceFormComponent<Tpposcirurgica> {

  constructor(
    protected servico: TpposcirurgicaService,
    protected injector: Injector
  ) { super(injector, new Tpposcirurgica(), servico, Tpposcirurgica.fromJson) }

  // ngOnInit() {
  //   this.setCurrentAction();  // pegando a ação
  //   this.buildCategoryForm(); // construindo o formulário
  //   this.loadCategory();      // carregando a categoria nos campos
  //   this.super();
  // }

  protected buildResourceForm() {
    // criando um formulário
    this.resourceForm = this.formBuilder.group({
      id: [null],
      descricao: [null, [Validators.required, Validators.minLength(3)]],
      score: [null]
    });
  }

  protected createPageTitle(): string {
    return 'Cadastro de Novo Tipo de Posição Cirúrgica';
  }

  protected editionPageTitle(): string {
    const resourceName = this.resource.descricao || '';
    // return 'Editando Tipo de Posição Cirúrgica: ' +resourceName;
    return 'Editando Tipo de Posição Cirúrgica: ';
  }
  
}