import { Component, OnInit, Injector } from '@angular/core';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { Tpcirurgia } from '../shared/tpcirurgia.model';
import { TpcirurgiaService } from '../shared/tpcirurgia.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-tpcirurgia-form',
  templateUrl: './tpcirurgia-form.component.html',
  styleUrls: ['./tpcirurgia-form.component.css']
})
export class TpcirurgiaFormComponent extends BaseResourceFormComponent<Tpcirurgia> {

  constructor(
    protected servico: TpcirurgiaService,
    protected injector: Injector
  ) { super(injector, new Tpcirurgia(), servico, Tpcirurgia.fromJson) }

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
    return 'Cadastro de Novo Tempo de Cirurgia';
  }

  protected editionPageTitle(): string {
    const resourceName = this.resource.descricao || '';
    return 'Editando Tempo de Cirurgia: ';
  }
  
}