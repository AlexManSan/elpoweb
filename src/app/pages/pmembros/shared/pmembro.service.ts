import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Pmembro } from './pmembro.model';

@Injectable({
  providedIn: 'root'
})

/**
 * Classe de serviço que se estende a BaseResourceService<Categoria>, informando seu tipo
 * Autor Alex Santos
 */
export class PmembroService extends BaseResourceService<Pmembro> {

  constructor(protected injector: Injector) {
    // super('http://localhost:8080/elpo/rest/ipaciente', injector, Ipaciente.fromJson)
    // super('http://localhost:4200/api/elpo/rest/pmembros', injector, Pmembro.fromJson)
    super('http://localhost:4200/api/pmembros', injector, Pmembro.fromJson)
   }
}
