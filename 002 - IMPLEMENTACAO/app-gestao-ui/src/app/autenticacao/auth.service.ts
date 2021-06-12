import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

import { environment } from '../../environments/environment.prod'

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
    this.carregarToken();
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
    } catch (responseError) {
      return await Promise.reject(responseError);
    }
  }

  armazenarToken(token: any) {
    this.jwtPayload = this.helper.decodeToken(token);
    localStorage.setItem('access_token', token);
  }

  carregarToken() {
    const token = localStorage.getItem('access_token');

    if (token) {
      this.armazenarToken(token);
    }
  }

  async teste() {
    this.httpClient.get('http://localhost:8080/bombeiros').toPromise<any>().then(response => {
      console.log(response);
    });
  }
  
}
