import { Component, OnInit } from '@angular/core';
import { Paciente } from '../shared/paciente.model';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { PacienteService } from '../shared/paciente.service';

@Component({
  selector: 'app-pacientes-list',
  templateUrl: './pacientes-list.component.html',
  styleUrls: ['./pacientes-list.component.css']
})
export class PacientesListComponent extends BaseResourceListComponent<Paciente> {

  constructor(private service: PacienteService){
    super(service);
  }

}
