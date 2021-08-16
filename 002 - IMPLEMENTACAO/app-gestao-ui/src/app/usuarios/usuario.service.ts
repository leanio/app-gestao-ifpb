import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment.prod'
import { ModelNovaSenha, UsuarioInput, UsuarioOutput } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = environment.apiUrl + '/usuarios';
  urlCampus = environment.apiUrl + '/campus';

  constructor(
    private httpClient: HttpClient
  ) { }

  async adicionar(usuario: UsuarioInput): Promise<UsuarioOutput> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.httpClient.post(this.url, JSON.stringify(usuario), {headers}).toPromise().then();
  }

  async atualizar(codigoUsuario: number, usuario: UsuarioInput): Promise<UsuarioOutput> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.httpClient.put(this.url + `/${codigoUsuario}`, JSON.stringify(usuario), {headers}).toPromise().then();
  }

  async buscar(codigo: number): Promise<any> {
    return this.httpClient.get<any>(this.url + `/${codigo}`).toPromise();
  }

  async listar(): Promise<any> {
    return this.httpClient.get<any>(this.url).toPromise();
  }

  async atualizarSenha(codigoUsuario: number, modelNovaSenha: ModelNovaSenha): Promise<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.httpClient.put(this.url + `/${codigoUsuario}/change-password`, modelNovaSenha, {headers}).toPromise().then();
  }

  async listarPorCampus(codigoCampus: number): Promise<any> {

    return this.httpClient.get<any>(this.urlCampus + `/${codigoCampus}/usuarios`).toPromise();
  }

}
