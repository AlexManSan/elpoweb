import { Component, OnInit, Injector } from '@angular/core';
import { Tpanestesia } from '../shared/tpanestesia.model';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { TpanestesiaService } from '../shared/tpanestedia.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-tpanestesia-form',
  templateUrl: './tpanestesia-form.component.html',
  styleUrls: ['./tpanestesia-form.component.css']
})
export class TpanestesiaFormComponent extends BaseResourceFormComponent<Tpanestesia> {

  constructor(
    protected servico: TpanestesiaService,
    protected injector: Injector
  ) { super(injector, new Tpanestesia(), servico, Tpanestesia.fromJson) }

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
    return 'Cadastro de Novo Tipo de Anestesia';
  }

  protected editionPageTitle(): string {
    const resourceName = this.resource.descricao || '';
    // return 'Editando Tipo de Anestesia: ' +resourceName;
    return 'Editando Tipo de Anestesia: ';
  }
  
}

