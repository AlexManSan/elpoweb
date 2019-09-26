import { Component, Injector } from '@angular/core';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { Ipaciente } from '../shared/ipaciente.model';
import { IpacienteService } from '../shared/ipaciente.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-ipaciente-form',
  templateUrl: './ipaciente-form.component.html',
  styleUrls: ['./ipaciente-form.component.css']
})
export class IpacienteFormComponent extends BaseResourceFormComponent<Ipaciente> {

  constructor(
    protected servico: IpacienteService,
    protected injector: Injector
  ) { super(injector, new Ipaciente(), servico, Ipaciente.fromJson) }

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
      idade: [null, [Validators.required, Validators.minLength(3)]],
      score: [null]
    });
  }

  protected createPageTitle(): string {
    return 'Cadastro de Nova Idade de Paciente';
  }

  protected editionPageTitle(): string {
    const resourceName = this.resource.idade || '';
    // return 'Editando Idade Paciente: ' +resourceName;
    return 'Editando Idade de Paciente: ';
  }
  
}
