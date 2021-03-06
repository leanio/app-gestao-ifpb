import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

import { environment } from '../../environments/environment.prod'
import { EmailRecoverPassword } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authTokenUrl = environment.apiUrl + '/oauth/token';

  helper = new JwtHelperService();
  jwtPayload: any;

  constructor(
    private httpClient: HttpClient
  ) { 
    this.carregarPayloadToken();
  }

  async autenticar(email: string, senha:String) {
    const headers = new HttpHeaders({
      Authorization: 'Basic YWRtaW4td2ViLXN5c3RlbTphZG1pbi13ZWItc3lzdGVtLWlmcGI=',
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = `username=${email}&password=${senha}&grant_type=password`;

    try {
      const response = await this.httpClient.post(this.authTokenUrl, body, { headers, withCredentials: true }).toPromise<any>();
      this.armazenarToken(response.access_token);
      this.carregarPayloadToken();
    } catch (responseError) {
      return await Promise.reject(responseError);
    }
  }

  async enviarCodigoRecuperacaoSenha(emailRecoverPassword: EmailRecoverPassword): Promise<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.httpClient.post(environment.apiUrl + '/email/recover-password', JSON.stringify(emailRecoverPassword), {headers}).toPromise().then();
  }

  armazenarToken(token: any): void {
    localStorage.setItem('access_token', token);
  }

  pegarToken(): any {
    return localStorage.getItem('access_token');
  }

  carregarPayloadToken(): void {
    const token = this.pegarToken();

    if (token) {
      this.jwtPayload = this.helper.decodeToken(token);
    }
  }

  logout(): void {
    localStorage.removeItem('access_token');
  }

  isAutenticado(): boolean {
    return !this.helper.isTokenExpired(this.pegarToken());
  }
  
}
