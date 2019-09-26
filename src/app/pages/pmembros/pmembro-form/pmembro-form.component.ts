import { Component, Injector } from '@angular/core';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { Pmembro } from '../shared/pmembro.model';
import { PmembroService } from '../shared/pmembro.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-pmembro-form',
  templateUrl: './pmembro-form.component.html',
  styleUrls: ['./pmembro-form.component.css']
})
export class PmembroFormComponent extends BaseResourceFormComponent<Pmembro> {

  constructor(
    protected servico: PmembroService,
    protected injector: Injector
  ) { super(injector, new Pmembro(), servico, Pmembro.fromJson) }

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
    return 'Cadastro de Nova Posição do Membro';
  }

  protected editionPageTitle(): string {
    const resourceName = this.resource.descricao || '';
    // return 'Editando Posicão de Membro: ' +resourceName;
    return 'Editando Posicão do Membro: ';
  }
  
}