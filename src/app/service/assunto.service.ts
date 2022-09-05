import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable } from 'rxjs';
import { Assunto } from '../model/Assunto';
import { NomeModel } from '../model/NomeModel';

@Injectable({
  providedIn: 'root'
})
export class AssuntoService {

  // private url = "http://localhost:8080";
  private url = "https://dashboard.heroku.com";

  constructor(
    private http: HttpClient
  ) {}

  token = {
    // headers: new HttpHeaders().set("Authorization", environment.token)
  }

  public getAll(): Observable<Assunto[]>{
    return this.http.get<Assunto[]>(this.url + "/assunto");
  }

  public getById(id: number): Observable<Assunto>{
    return this.http.get<Assunto>(this.url + `/assunto/${id}`);
  }

  public getAllNome(): Observable<NomeModel[]>{
    return this.http.get<NomeModel[]>(this.url + "/assunto/nome");
  }

  public findByNome(nome: string): Observable<Assunto>{
    return this.http.get<Assunto>(this.url + `/assunto/nome/${nome}`);
  }

  public getAllTopicosNomes(nome: string): Observable<NomeModel[]>{
    return this.http.get<NomeModel[]>(this.url + `/assunto/nome/${nome}/topico`);
  }

  public post(assunto: Assunto): Observable<Assunto>{
    return this.http.post<Assunto>(this.url + "/assunto", assunto);
  }

  public put(assunto: Assunto): Observable<Assunto>{
    return this.http.put<Assunto>(this.url + "/assunto", assunto);
  }

  public delete(id: number){
    return this.http.delete(this.url + `/assunto/${id}`);
  }
}
