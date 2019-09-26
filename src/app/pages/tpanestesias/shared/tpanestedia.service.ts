import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Tpanestesia } from './tpanestesia.model';

@Injectable({
  providedIn: 'root'
})

/**
 * Classe de serviço que se estende a BaseResourceService<T>, informando seu tipo
 * Autor Alex Santos
 */
export class TpanestesiaService extends BaseResourceService<Tpanestesia> {

  constructor(protected injector: Injector) {
      // super('http://localhost:8080/elpo/rest/tpanestesias', injector, Tpanestesia.fromJson)
    // super('http://localhost:4200/api/elpo/rest/tpanestesias', injector, Tpanestesia.fromJson)
    super('http://localhost:4200/api/tpanestesias', injector, Tpanestesia.fromJson)
   }
}
