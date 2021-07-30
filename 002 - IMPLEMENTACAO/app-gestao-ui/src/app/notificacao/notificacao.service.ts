import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment.prod'
import { EnviarNotificacaoInput, EnviarNotificacaoOutput, NotificacaoOutput } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  url = environment.apiUrl + '/usuarios';

  constructor(
    private httpClient: HttpClient
  ) { }

  async notificar(notificacao: EnviarNotificacaoInput): Promise<EnviarNotificacaoOutput> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.httpClient.post(`${environment.apiUrl}/notifications/send-notification`, JSON.stringify(notificacao), {headers}).toPromise().then();
  }

  async listar(codigoUsuario: number): Promise<NotificacaoOutput[]> {
    return this.httpClient.get<any>(`${this.url}/${codigoUsuario}/notificacoes`).toPromise();
  }

}
