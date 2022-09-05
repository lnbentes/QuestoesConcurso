import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable } from 'rxjs';
import { Questao } from '../model/Questao';

@Injectable({
  providedIn: 'root'
})
export class QuestaoService {

  // private url = "http://localhost:8080";
  private url = "https://dashboard.heroku.com";

  constructor(
    private http: HttpClient
  ) {}

  token = {
    // headers: new HttpHeaders().set("Authorization", environment.token)
  }

  public getAll(): Observable<Questao[]>{
    return this.http.get<Questao[]>(this.url + "/questao");
  }

  public getById(id: number): Observable<Questao>{
    return this.http.get<Questao>(this.url + `/questao/${id}`);
  }

  public cincoQuestoes(): Observable<Questao[]>{
    return this.http.get<Questao[]>(this.url + "/questao/sortear");
  }

  public sortearNVezes(numero: number): Observable<Questao[]>{
    return this.http.get<Questao[]>(this.url + `/questao/sortear/${numero}`);
  }

  public post(questao: Questao): Observable<Questao>{
    return this.http.post<Questao>(this.url + "/questao", questao);
  }

  public put(questao: Questao): Observable<Questao>{
    return this.http.put<Questao>(this.url + "/questao", questao);
  }

  public delete(id: number){
    return this.http.delete(this.url + `/questao/${id}`);
  }
}
