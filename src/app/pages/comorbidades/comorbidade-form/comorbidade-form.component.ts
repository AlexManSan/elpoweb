import { Component, Injector } from '@angular/core';
import { Comorbidade } from '../shared/comorbidade.model';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { ComorbidadeService } from '../shared/comorbidade.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-comorbidade-form',
  templateUrl: './comorbidade-form.component.html',
  styleUrls: ['./comorbidade-form.component.css']
})
export class ComorbidadeFormComponent extends BaseResourceFormComponent<Comorbidade> {

  constructor(
    protected servico: ComorbidadeService,
    protected injector: Injector
  ) { super(injector, new Comorbidade(), servico, Comorbidade.fromJson) }

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
    return 'Cadastro de Nova Comorbidade';
  }

  protected editionPageTitle(): string {
    const resourceName = this.resource.descricao || '';
    // return 'Editando Comorbidade: ' +resourceName;
    return 'Editando Comorbidade: ';
  }
  
}
