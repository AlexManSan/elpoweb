import { Component, OnInit } from '@angular/core';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { Tpcirurgia } from '../shared/tpcirurgia.model';
import { TpcirurgiaService } from '../shared/tpcirurgia.service';

@Component({
  selector: 'app-tpcirurgia-list',
  templateUrl: './tpcirurgia-list.component.html',
  styleUrls: ['./tpcirurgia-list.component.css']
})
export class TpcirurgiaListComponent extends BaseResourceListComponent<Tpcirurgia> {

  constructor(private service: TpcirurgiaService){
    super(service);
   }

}
