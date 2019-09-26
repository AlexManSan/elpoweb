import { Component, OnInit } from '@angular/core';
import { Ssuporte } from '../shared/ssuporte.model';
import { SsuporteService } from '../shared/ssuporte.service';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';

@Component({
  selector: 'app-ssuporte-list',
  templateUrl: './ssuporte-list.component.html',
  styleUrls: ['./ssuporte-list.component.css']
})
export class SsuporteListComponent extends BaseResourceListComponent<Ssuporte> {

  constructor(private service: SsuporteService){
    super(service);
   }

}

