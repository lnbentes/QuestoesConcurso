import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable } from 'rxjs';
import { Ano } from '../model/Ano';
import { NomeModel } from '../model/NomeModel';

@Injectable({
  providedIn: 'root'
})

export class AnoService{

  // private url = "http://localhost:8080";
  private url = "https://dashboard.heroku.com";

  constructor(
    private http: HttpClient
  ) {}

  token = {
    // headers: new HttpHeaders().set("Authorization", environment.token)
  }

  public getAll(): Observable<Ano[]>{
    return this.http.get<Ano[]>(this.url + "/ano");
  }

  public getById(id: number): Observable<Ano>{
    return this.http.get<Ano>(this.url + `/ano/${id}`);
  }

  public getAllNome(): Observable<NomeModel[]>{
    return this.http.get<NomeModel[]>(this.url + "/ano/nome");
  }

  public findByNome(nome: string): Observable<Ano>{
    return this.http.get<Ano>(this.url + `/ano/nome/${nome}`);
  }

  public post(ano: Ano): Observable<Ano>{
    return this.http.post<Ano>(this.url + "/ano", ano);
  }

  public put(ano: Ano): Observable<Ano>{
    return this.http.put<Ano>(this.url + "/ano", ano);
  }

  public delete(id: number){
    return this.http.delete(this.url + `/ano/${id}`);
  }
}
