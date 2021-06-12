import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class RegulamentoService {

  url = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  async subirRegulamentoPdf(arquivo: any, campusId: number, processoId: number): Promise<any> {
    const formData = new FormData();
    formData.append('arquivo', arquivo);
    formData.append('nomeArquivo', arquivo.name);
    formData.append('contentType', 'multipart/form-data');

    return this.httpClient.post(this.url + `/campus/${campusId}/processos/${processoId}/regulamentos`, formData).toPromise();
  }
}
