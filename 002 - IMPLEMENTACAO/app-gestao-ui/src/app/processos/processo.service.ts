import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment.prod'
import { ProcessoInput, ProcessoOutputBuscar, ProcessoOutputListar } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class ProcessoService {
  url = environment.apiUrl + '/campus';
 
  constructor(
    private httpClient: HttpClient
  ) { }

  async adicionar(codigoCampus: number, processo: ProcessoInput): Promise<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.httpClient.post(this.url + `/${codigoCampus}/processos`, JSON.stringify(processo), {headers}).toPromise().then();
  }

  async buscar(codigoCampus: number, codigoProcesso: number): Promise<ProcessoOutputBuscar> {
    return this.httpClient.get<ProcessoOutputBuscar>(this.url + `/${codigoCampus}/processos/${codigoProcesso}`).toPromise();
  }

  async listar(codigoCampus: number): Promise<ProcessoOutputListar[]> {
    return this.httpClient.get<ProcessoOutputListar[]>(this.url + `/${codigoCampus}/processos`).toPromise();
  }
}
