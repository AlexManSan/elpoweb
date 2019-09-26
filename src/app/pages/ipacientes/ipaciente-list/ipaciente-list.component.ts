import { Component, OnInit } from '@angular/core';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { Ipaciente } from '../shared/ipaciente.model';
import { IpacienteService } from '../shared/ipaciente.service';

@Component({
  selector: 'app-ipaciente-list',
  templateUrl: './ipaciente-list.component.html',
  styleUrls: ['./ipaciente-list.component.css']
})
export class IpacienteListComponent extends BaseResourceListComponent<Ipaciente> {

  constructor(private service: IpacienteService){
    super(service);
   }


}
