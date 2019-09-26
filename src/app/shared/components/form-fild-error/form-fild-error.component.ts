import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-fild-error',
  template: `
  <!--  com efeitos 
    <p class="shadow rounded text-white bg-danger">
      <span *ngIf="mustShowErrorMessage()" class="ml-2">{{errorMessage}}</span>
    </p>
  -->
  
    <p class="text-danger">
      <span *ngIf="mustShowErrorMessage()" >{{errorMessage}}</span>
    </p>
  `,
  styleUrls: ['./form-fild-error.component.css']
})
export class FormFildErrorComponent implements OnInit {

  @Input('form-control') formControl: FormControl; 
  
  constructor() { }

  ngOnInit() {
  }

  public get errorMessage(): string | null {
    if(this.mustShowErrorMessage())
      return this.getErrorMessage();
    else
      return null;
  }

  private mustShowErrorMessage(): boolean {
    return this.formControl.invalid && this.formControl.touched;
  }

  private getErrorMessage(): string | null {
    if(this.formControl.errors.required)
      return "dado obrigatório";
    
    else if(this.formControl.errors.minlength){
      const requeridLength = this.formControl.errors.minlength.requiredLength;
      return `deve ter no mínimo ${requeridLength} caracteres`;
    }
    else if(this.formControl.errors.maxlength){
      const requeridLength = this.formControl.errors.maxlength.requiredLength;
      return `deve ter no máximo ${requeridLength} caracteres`;
    }
    else if(this.formControl.errors.email){
      return "formato de email inválido";
    }
  }

}
