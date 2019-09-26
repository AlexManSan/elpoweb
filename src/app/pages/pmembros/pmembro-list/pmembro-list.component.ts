import { Component } from '@angular/core';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { Pmembro } from '../shared/pmembro.model';
import { PmembroService } from '../shared/pmembro.service';

@Component({
  selector: 'app-pmembro-list',
  templateUrl: './pmembro-list.component.html',
  styleUrls: ['./pmembro-list.component.css']
})
export class PmembroListComponent extends BaseResourceListComponent<Pmembro> {

  constructor(private service: PmembroService){
    super(service);
   }
}
