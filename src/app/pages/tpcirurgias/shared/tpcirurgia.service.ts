import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Tpcirurgia } from './tpcirurgia.model';

@Injectable({
  providedIn: 'root'
})

/**
 * Classe de serviço que se estende a BaseResourceService<Categoria>, informando seu tipo
 * Autor Alex Santos
 */
export class TpcirurgiaService extends BaseResourceService<Tpcirurgia> {

  constructor(protected injector: Injector) {
      super('http://localhost:8080/tpcirurgias', injector, Tpcirurgia.fromJson)
      // super('http://localhost:8080/elpo/rest/tpcirurgias', injector, Tpcirurgia.fromJson)
    // super('http://localhost:4200/api/elpo/rest/tpcirurgias', injector, Tpcirurgia.fromJson)
    // super('http://localhost:4200/api/tpcirurgias', injector, Tpcirurgia.fromJson)
   }
}
