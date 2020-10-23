import { Component, OnInit, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  // pra instanciar vou precisar do formBuilder
  formGroup: FormGroup;
  
  constructor(protected servico: LoginService,
    protected injector: Injector,
    public formBuilder: FormBuilder, 
    protected router: Router
  ) {
      this.formGroup = this.formBuilder.group({
        // aqui eu coloco todos os campor do formulário com o valor inicial + validator
        // ou seja eu repito as validações que eu coloquei no domain
        email: [null, [Validators.required]],
        senha: [null]
      });
    }

  ngOnInit() {  }

  

  getlogin() {
    if(this.formGroup.controls.email.value !== null && this.formGroup.controls.senha.value !== null){
      this.router.navigate(['/elpos']);
    }else{
      alert("Favor informar email e senha para acessar o sistema.");
    }
  }

}
