import { Component } from '@angular/core';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { TpanestesiaService } from '../shared/tpanestedia.service';
import { Tpanestesia } from '../shared/tpanestesia.model';

@Component({
  selector: 'app-tpanestesia-list',
  templateUrl: './tpanestesia-list.component.html',
  styleUrls: ['./tpanestesia-list.component.css']
})
export class TpanestesiaListComponent extends BaseResourceListComponent<Tpanestesia> {

  constructor(private service: TpanestesiaService){
    super(service);
   }

}