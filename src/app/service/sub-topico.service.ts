import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable } from 'rxjs';
import { SubTopico } from '../model/SubTopico';
import { NomeModel } from '../model/NomeModel';

@Injectable({
  providedIn: 'root'
})
export class SubTopicoService {

  // private url = "http://localhost:8080";
  private url = "https://dashboard.heroku.com";

  constructor(
    private http: HttpClient
  ) {}

  token = {
    // headers: new HttpHeaders().set("Authorization", environment.token)
  }

  public getAll(): Observable<SubTopico[]>{
    return this.http.get<SubTopico[]>(this.url + "/subTopico");
  }

  public getById(id: number): Observable<SubTopico>{
    return this.http.get<SubTopico>(this.url + `/subTopico/${id}`);
  }

  public getAllNome(): Observable<NomeModel[]>{
    return this.http.get<NomeModel[]>(this.url + "/subTopico/nome");
  }

  public findByNome(nome: string): Observable<SubTopico>{
    return this.http.get<SubTopico>(this.url + `/subTopico/nome/${nome}`);
  }

  public post(subTopico: SubTopico): Observable<SubTopico>{
    return this.http.post<SubTopico>(this.url + "/subTopico", subTopico);
  }

  public put(subTopico: SubTopico): Observable<SubTopico>{
    return this.http.put<SubTopico>(this.url + "/subTopico", subTopico);
  }

  public delete(id: number){
    return this.http.delete(this.url + `/subTopico/${id}`);
  }
}
