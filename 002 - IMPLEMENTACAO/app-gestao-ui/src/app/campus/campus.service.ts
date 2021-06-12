import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CampusInput, CampusOutput } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class CampusService {

  url = environment.apiUrl + '/campus';

  constructor(
    private httpClient: HttpClient
  ) { }

  async adicionar(campus: CampusInput): Promise<CampusOutput> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.httpClient.post(this.url, JSON.stringify(campus), {headers}).toPromise().then();
  }

  async atualizar(codigoCampus: number, campus: CampusInput): Promise<CampusOutput> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    console.log(campus);
    
    return this.httpClient.put(this.url + `/${codigoCampus}`, JSON.stringify(campus), {headers}).toPromise().then();
  }

  async buscar(codigo: number): Promise<CampusOutput> {
    return this.httpClient.get<CampusOutput>(this.url + `/${codigo}`).toPromise();
  }

  async listar(): Promise<any> {
    return this.httpClient.get<any>(this.url).toPromise();
  }

}
