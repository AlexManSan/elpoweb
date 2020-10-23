import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Paciente } from './paciente.model';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

/**
 * Classe de serviço que se estende a BaseResourceService<Categoria>, informando seu tipo
 * Autor Alex Santos
 */
export class PacienteService extends BaseResourceService<Paciente> {

  apiUrlM2: string = 'http://localhost:8090/pacientes';
  apiUrlM1: string = 'http://localhost:8080/pacientes';

  constructor(protected injector: Injector) {
    super('http://localhost:8080/pacientes', injector, Paciente.fromJson)
    // super('http://localhost:8080/elpo/rest/ipaciente', injector, Ipaciente.fromJson)
    // super('http://localhost:4200/api/elpo/rest/ipaciente', injector, Ipaciente.fromJson)
    // super('http://localhost:4200/api/idade_pacientes', injector, Ipaciente.fromJson)
   }

   getAll(): Observable<Paciente[]> {
    console.log("Buscando de: "+ this.apiUrlM2);
    return this.http.get(this.apiUrlM2).pipe(
        map(this.jasonDataToRecursos.bind(this)),
        catchError(this.handleError)
    );
}
}
