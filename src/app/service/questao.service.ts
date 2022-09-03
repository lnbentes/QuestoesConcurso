import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable } from 'rxjs';
import { Questao } from '../model/Questao';

@Injectable({
  providedIn: 'root'
})
export class QuestaoService {

  private url = "http://localhost:8080";

  constructor(
    private http: HttpClient
  ) {}

  token = {
    // headers: new HttpHeaders().set("Authorization", environment.token)
  }

  getAll(): Observable<Questao[]>{
    return this.http.get<Questao[]>(this.url + "/questao");
  }

  getById(id: number): Observable<Questao>{
    return this.http.get<Questao>(this.url + `/questao/${id}`);
  }

  cincoQuestoes(): Observable<Questao[]>{
    return this.http.get<Questao[]>(this.url + "/questao/sortear");
  }

  sortearNVezes(numero: number): Observable<Questao[]>{
    return this.http.get<Questao[]>(this.url + `/questao/sortear/${numero}`);
  }

  post(questao: Questao): Observable<Questao>{
    return this.http.post<Questao>(this.url + "/questao", questao);
  }

  put(questao: Questao): Observable<Questao>{
    return this.http.put<Questao>(this.url + "/questao", questao);
  }

  delete(id: number){
    return this.http.delete(this.url + `/questao/${id}`);
  }
}
