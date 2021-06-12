import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutenticacaoRoutingModule } from './autenticacao-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';

import { JwtModule } from '@auth0/angular-jwt';

import { environment } from '../../environments/environment.prod'

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,

    ButtonModule,
    InputTextModule,

    AutenticacaoRoutingModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: [environment.apiDominio],
        disallowedRoutes: [environment.apiUrl + '/oauth/token', 'http://localhost:8080/bombeiros'],
      },
    }),
  ],

})
export class AutenticacaoModule { }
