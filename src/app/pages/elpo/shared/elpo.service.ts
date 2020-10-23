import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Elpo } from './elpo.model';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

/**
 * Classe de serviço que se estende a BaseResourceService<Categoria>, informando seu tipo
 * Autor Alex Santos
 */
export class ElpoService extends BaseResourceService<Elpo> {

  apiUrlM2: string = 'http://localhost:8090/elpos';
  apiUrlM1: string = 'http://localhost:8080/elpos';

  constructor(
    protected injector: Injector,
    ) {
      super('http://localhost:8090/elpos', injector, Elpo.fromJson)
      // super('http://localhost:8080/elpo/rest/comorbidades', injector, Comorbidade.fromJson)
    // super('http://localhost:4200/api/elpo/rest/comorbidades', injector, Comorbidade.fromJson)
    // super('http://localhost:4200/api/comorbidades', injector, Comorbidade.fromJson)
   }

   getByProntuario(pront: number): Observable<Elpo[]> {
    const url = `${this.apiUrlM2}/pesq/${pront}`;
    console.log("Buscando Prontuário de: "+ url);

    return this.http.get(url).pipe(
        map(this.jasonDataToRecursos.bind(this)),
        catchError(this.handleError)
    );
  } 

  getByUsuario(user: string): Observable<Elpo[]> {
    const url = `${this.apiUrlM2}/pesq/paciente/${user}`;
    console.log("Buscando usuário de: "+ url);

    return this.http.get(url).pipe(
        map(this.jasonDataToRecursos.bind(this)),
        catchError(this.handleError)
    );
  } 

  getAll(): Observable<Elpo[]> {
    console.log("Buscando de: "+ this.apiUrl);
    return this.http.get(this.apiUrlM2).pipe(
        map(this.jasonDataToRecursos.bind(this)),
        catchError(this.handleError)
    );
}

getById(id: number): Observable<Elpo> {
    const url = `${this.apiUrlM1}/${id}`;
    console.log("Buscando de: "+ url);

    return this.http.get(url).pipe(
        map(this.jasonDataToRecurso.bind(this)),
        catchError(this.handleError)
    );
}

  create(recurso: Elpo): Observable<Elpo> {
    console.log("Crianno para: "+ this.apiUrlM1);
    return this.http.post(this.apiUrlM1, recurso).pipe(
        map(this.jasonDataToRecurso.bind(this)),
        catchError(this.handleError)
    );
}

}
