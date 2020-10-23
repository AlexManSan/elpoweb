import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Comorbidade } from './comorbidade.model';

@Injectable({
  providedIn: 'root'
})

/**
 * Classe de serviço que se estende a BaseResourceService<Categoria>, informando seu tipo
 * Autor Alex Santos
 */
export class ComorbidadeService extends BaseResourceService<Comorbidade> {

  constructor(protected injector: Injector) {
      super('http://localhost:8080/comorbidades', injector, Comorbidade.fromJson)
      // super('http://localhost:8080/elpo/rest/comorbidades', injector, Comorbidade.fromJson)
    // super('http://localhost:4200/api/elpo/rest/comorbidades', injector, Comorbidade.fromJson)
    // super('http://localhost:4200/api/comorbidades', injector, Comorbidade.fromJson)
   }
}
