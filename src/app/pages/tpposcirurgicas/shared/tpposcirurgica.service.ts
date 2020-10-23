import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Tpposcirurgica } from './tpposcirurgica.model';


@Injectable({
  providedIn: 'root'
})

/**
 * Classe de serviço que se estende a BaseResourceService<Tpposcirurgica>, informando seu tipo
 * Autor Alex Santos
 */
export class TpposcirurgicaService extends BaseResourceService<Tpposcirurgica> {

  constructor(protected injector: Injector) {
    super('http://localhost:8080/tpposcirurgicas', injector, Tpposcirurgica.fromJson)
    // super('http://localhost:4200/api/elpo/rest/tpposcirurgicas', injector, Tpposcirurgica.fromJson)
    // super('http://localhost:4200/api/tpposcirurgicas', injector, Tpposcirurgica.fromJson)
    
   }
}