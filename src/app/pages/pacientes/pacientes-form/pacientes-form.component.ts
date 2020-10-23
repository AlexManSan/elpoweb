import { Component, Injector } from '@angular/core';
import { Paciente } from '../shared/paciente.model';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { PacienteService } from '../shared/paciente.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-pacientes-form',
  templateUrl: './pacientes-form.component.html',
  styleUrls: ['./pacientes-form.component.css']
})
export class PacientesFormComponent extends BaseResourceFormComponent<Paciente> {

  constructor(
    protected servico: PacienteService,
    protected injector: Injector
  ) { super(injector, new Paciente(), servico, Paciente.fromJson) }

  protected buildResourceForm() {
    // criando um formulário
    this.resourceForm = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(3)]],
      idade: [null, [Validators.required]],
      prontuario: [null]
    });
  }

  protected createPageTitle(): string {
    return 'Cadastro de Novo Paciente';
  }

  protected editionPageTitle(): string {
    const resourceName = this.resource.nome || '';
    // return 'Editando Comorbidade: ' +resourceName;
    return 'Editando Paciente: ';
  }

}
