import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataBase } from '../in-memory-database';

import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // remover depois quando estiver com o back end
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataBase),
    RouterModule
  ],
  exports: [
    // shared modules
    BrowserModule,
    BrowserAnimationsModule,

    //shared component
    NavbarComponent
  ],
  providers: []
})
export class CoreModule { }
