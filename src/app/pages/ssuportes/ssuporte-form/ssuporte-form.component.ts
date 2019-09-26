import { Component, OnInit, Injector } from '@angular/core';
import { Ssuporte } from '../shared/ssuporte.model';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { SsuporteService } from '../shared/ssuporte.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-ssuporte-form',
  templateUrl: './ssuporte-form.component.html',
  styleUrls: ['./ssuporte-form.component.css']
})
export class SsuporteFormComponent extends BaseResourceFormComponent<Ssuporte> {

  constructor(
    protected servico: SsuporteService,
    protected injector: Injector
  ) { super(injector, new Ssuporte(), servico, Ssuporte.fromJson) }

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
    return 'Cadastro de Nova Superfície de Suporte';
  }

  protected editionPageTitle(): string {
    const resourceName = this.resource.descricao || '';
    // return 'Editando Superfície de Suporte: ' +resourceName;
    return 'Editando Superfície de Suporte: ';
  }
  
}

