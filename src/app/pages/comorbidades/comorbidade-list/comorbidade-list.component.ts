import { Component } from '@angular/core';
import { Comorbidade } from '../shared/comorbidade.model';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { ComorbidadeService } from '../shared/comorbidade.service';

@Component({
  selector: 'app-comorbidade-list',
  templateUrl: './comorbidade-list.component.html',
  styleUrls: ['./comorbidade-list.component.css']
})
export class ComorbidadeListComponent extends BaseResourceListComponent<Comorbidade> {

  constructor(private service: ComorbidadeService){
    super(service);
   }


}
