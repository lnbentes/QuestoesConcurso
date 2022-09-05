import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable } from 'rxjs';
import { Topico } from '../model/Topico';
import { NomeModel } from '../model/NomeModel';

@Injectable({
  providedIn: 'root'
})
export class TopicoService {

  // private url = "http://localhost:8080";
  private url = "https://bpconcurso.herokuapp.com";

  constructor(
    private http: HttpClient
  ) {}

  token = {
    // headers: new HttpHeaders().set("Authorization", environment.token)
  }

  public getAll(): Observable<Topico[]>{
    return this.http.get<Topico[]>(this.url + "/topico");
  }

  public getById(id: number): Observable<Topico>{
    return this.http.get<Topico>(this.url + `/topico/${id}`);
  }

  public getAllNome(): Observable<NomeModel[]>{
    return this.http.get<NomeModel[]>(this.url + "/topico/nome");
  }

  public findByNome(nome: string): Observable<Topico>{
    return this.http.get<Topico>(this.url + `/topico/nome/${nome}`);
  }

  public getAllSubTopicosNomes(nome: string): Observable<NomeModel[]>{
    return this.http.get<NomeModel[]>(this.url + `/topico/nome/${nome}/sub_topico`);
  }

  public post(topico: Topico): Observable<Topico>{
    return this.http.post<Topico>(this.url + "/topico", topico);
  }

  public put(topico: Topico): Observable<Topico>{
    return this.http.put<Topico>(this.url + "/topico", topico);
  }

  public delete(id: number){
    return this.http.delete(this.url + `/topico/${id}`);
  }
}
