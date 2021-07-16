import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment.prod'
import { FaqOutput, FaqPerguntaInput, FaqRespostaInput, ProcessoInput, ProcessoOutputBuscar, ProcessoOutputListar } from '../core/model';

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

  async removerRegulamento(codigoCampus: number, codigoProcesso: number, codigoRegulamento: number): Promise<any> {
    return this.httpClient.delete<any>(this.url + `/${codigoCampus}/processos/${codigoProcesso}/regulamentos/${codigoRegulamento}`).toPromise();
  }

  async perguntar(codigoCampus: number, codigoProcesso: number, faqPergunta: FaqPerguntaInput): Promise<FaqOutput> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.httpClient.post(this.url + `/${codigoCampus}/processos/${codigoProcesso}/faqs`, JSON.stringify(faqPergunta), {headers}).toPromise().then();
  }

  async responder(codigoCampus: number, codigoProcesso: number, codigoFaq: number, faqResposta: FaqRespostaInput): Promise<FaqOutput> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.httpClient.put(this.url + `/${codigoCampus}/processos/${codigoProcesso}/faqs/${codigoFaq}`, JSON.stringify(faqResposta), {headers}).toPromise().then();
  }

  async ativarFaq(codigoCampus: number, codigoProcesso: number, codigoFaq: number): Promise<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.httpClient.put(this.url + `/${codigoCampus}/processos/${codigoProcesso}/faqs/${codigoFaq}/ativar`, {headers}).toPromise().then();
  }

  async inativarFaq(codigoCampus: number, codigoProcesso: number, codigoFaq: number): Promise<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.httpClient.delete(this.url + `/${codigoCampus}/processos/${codigoProcesso}/faqs/${codigoFaq}/inativar`, {headers}).toPromise().then();
  }

  async removerFaq(codigoCampus: number, codigoProcesso: number, codigoFaq: number): Promise<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.httpClient.delete(this.url + `/${codigoCampus}/processos/${codigoProcesso}/faqs/${codigoFaq}`, {headers}).toPromise().then();
  }

  async subirRegulamentoPdf(arquivo: any, descricao: string, codigoCampus: number, codigoProcesso: number): Promise<any> {
    const formData = new FormData();
    formData.append('arquivo', arquivo);
    formData.append('nomeArquivo', arquivo.name);
    formData.append('descricao', descricao);
    formData.append('contentType', 'multipart/form-data');

    return this.httpClient.post(this.url + `/${codigoCampus}/processos/${codigoProcesso}/regulamentos`, formData).toPromise();
  }

  async removerGuia(codigoCampus: number, codigoProcesso: number, codigoGuia: number): Promise<any> {
    return this.httpClient.delete<any>(this.url + `/${codigoCampus}/processos/${codigoProcesso}/guias/${codigoGuia}`).toPromise();
  }

  async subirGuiaPdf(arquivo: any, descricao: string, codigoCampus: number, codigoGuia: number): Promise<any> {
    const formData = new FormData();
    formData.append('arquivo', arquivo);
    formData.append('nomeArquivo', arquivo.name);
    formData.append('descricao', descricao);
    formData.append('contentType', 'multipart/form-data');

    return this.httpClient.post(this.url + `/${codigoCampus}/processos/${codigoGuia}/guias`, formData).toPromise();
  }

  async removerAnexo(codigoCampus: number, codigoProcesso: number, codigoAnexo: number): Promise<any> {
    return this.httpClient.delete<any>(this.url + `/${codigoCampus}/processos/${codigoProcesso}/anexos/${codigoAnexo}`).toPromise();
  }

  async subirAnexoPdf(arquivo: any, descricao: string, codigoCampus: number, codigoAnexo: number): Promise<any> {
    const formData = new FormData();
    formData.append('arquivo', arquivo);
    formData.append('nomeArquivo', arquivo.name);
    formData.append('descricao', descricao);
    formData.append('contentType', 'multipart/form-data');

    return this.httpClient.post(this.url + `/${codigoCampus}/processos/${codigoAnexo}/anexos`, formData).toPromise();
  }

}
