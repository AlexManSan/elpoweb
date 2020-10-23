import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Recomendacoes } from './recomendacoes.model';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

/**
 * Classe de serviço que se estende a BaseResourceService<Categoria>, informando seu tipo
 * Autor Alex Santos
 */
export class RecomendacoesService extends BaseResourceService<Recomendacoes> {

  constructor(protected injector: Injector) {
      super('http://localhost:8080/recomendacoes', injector, Recomendacoes.fromJson)
      // super('http://localhost:8080/elpo/rest/comorbidades', injector, Comorbidade.fromJson)
    // super('http://localhost:4200/api/elpo/rest/comorbidades', injector, Comorbidade.fromJson)
    // super('http://localhost:4200/api/comorbidades', injector, Comorbidade.fromJson)
   }

   getByTpPosicaoCirurgica(iptpPosCir: number): Observable<Recomendacoes[]> {
    const url = `${this.apiUrl}/tpposicaocirurgica/${iptpPosCir}`;
    console.log("Buscando usuário de: "+ url);

    return this.http.get(url).pipe(
        map(this.jasonDataToRecursos.bind(this)),
        catchError(this.handleError)
    );
  } 
}
