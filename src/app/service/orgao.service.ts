import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable } from 'rxjs';
import { Orgao } from '../model/Orgso';
import { NomeModel } from '../model/NomeModel';

@Injectable({
  providedIn: 'root'
})
export class OrgaoService {

  private url = "http://localhost:8080";

  constructor(
    private http: HttpClient
  ) {}

  token = {
    // headers: new HttpHeaders().set("Authorization", environment.token)
  }

  public getAll(): Observable<Orgao[]>{
    return this.http.get<Orgao[]>(this.url + "/orgao");
  }

  public getById(id: number): Observable<Orgao>{
    return this.http.get<Orgao>(this.url + `/orgao/${id}`);
  }

  public getAllNome(): Observable<NomeModel[]>{
    return this.http.get<NomeModel[]>(this.url + "/orgao/nome");
  }

  public findByNome(nome: string): Observable<Orgao>{
    return this.http.get<Orgao>(this.url + `/orgao/nome/${nome}`);
  }

  public post(orgao: Orgao): Observable<Orgao>{
    return this.http.post<Orgao>(this.url + "/orgao", orgao);
  }

  public put(orgao: Orgao): Observable<Orgao>{
    return this.http.put<Orgao>(this.url + "/orgao", orgao);
  }

  public delete(id: number){
    return this.http.delete(this.url + `/orgao/${id}`);
  }
}
