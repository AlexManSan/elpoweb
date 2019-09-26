import { Component } from '@angular/core';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { Tpposcirurgica } from '../shared/tpposcirurgica.model';
import { TpposcirurgicaService } from '../shared/tpposcirurgica.service';

@Component({
  selector: 'app-tpposcirurgica-list',
  templateUrl: './tpposcirurgica-list.component.html',
  styleUrls: ['./tpposcirurgica-list.component.css']
})
export class TpposcirurgicaListComponent extends BaseResourceListComponent<Tpposcirurgica> {

  constructor(private service: TpposcirurgicaService){
    super(service);
   }

}
