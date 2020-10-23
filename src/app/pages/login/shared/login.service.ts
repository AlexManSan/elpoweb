import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Login } from './login.model';

@Injectable({
  providedIn: 'root'
})

/**
 * Classe de serviço que se estende a BaseResourceService<Categoria>, informando seu tipo
 * Autor Alex Santos
 */
export class LoginService extends BaseResourceService<Login> {

  constructor(protected injector: Injector) {
    super('http://localhost:8080/login', injector, Login.fromJson)
    // super('http://localhost:8080/elpo/rest/ipaciente', injector, Ipaciente.fromJson)
    // super('http://localhost:4200/api/elpo/rest/ipaciente', injector, Ipaciente.fromJson)
    // super('http://localhost:4200/api/idade_pacientes', injector, Ipaciente.fromJson)
   }
}
