import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Ssuporte } from './ssuporte.model';

@Injectable({
  providedIn: 'root'
})

/**
 * Classe de serviço que se estende a BaseResourceService<Categoria>, informando seu tipo
 * Autor Alex Santos
 */
export class SsuporteService extends BaseResourceService<Ssuporte> {

  constructor(protected injector: Injector) {
      // super('http://localhost:8080/elpo/rest/comorbidades', injector, Comorbidade.fromJson)
    // super('http://localhost:4200/api/elpo/rest/ssuportes', injector, Ssuporte.fromJson)
    super('http://localhost:4200/api/ssuportes', injector, Ssuporte.fromJson)
   }
}
