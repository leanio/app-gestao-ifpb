import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  url = environment.apiUrl + '/usuarios';

  constructor(
    private httpClient: HttpClient
  ) { }

  async listar(codigoUsuario: number): Promise<any> {
    return this.httpClient.get<any>(`${this.url}/${codigoUsuario}/notificacoes`).toPromise();
  }

}
