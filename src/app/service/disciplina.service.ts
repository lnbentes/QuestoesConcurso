import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable } from 'rxjs';
import { Disciplina } from '../model/Disciplina';
import { NomeModel } from '../model/NomeModel';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  private url = "http://localhost:8080";

  constructor(
    private http: HttpClient
  ) {}

  token = {
    // headers: new HttpHeaders().set("Authorization", environment.token)
  }

  public getAll(): Observable<Disciplina[]>{
    return this.http.get<Disciplina[]>(this.url + "/disciplina");
  }

  public getById(id: number): Observable<Disciplina>{
    return this.http.get<Disciplina>(this.url + `/disciplina/${id}`);
  }

  public getAllNome(): Observable<NomeModel[]>{
    return this.http.get<NomeModel[]>(this.url + "/disciplina/nome");
  }

  public findByNome(nome: string): Observable<Disciplina>{
    return this.http.get<Disciplina>(this.url + `/disciplina/nome/${nome}`);
  }

  public getAllAssuntosNomes(nome: string): Observable<NomeModel[]>{
    return this.http.get<NomeModel[]>(this.url + `/disciplina/nome/${nome}/assunto`);
  }

  public post(disciplina: Disciplina): Observable<Disciplina>{
    return this.http.post<Disciplina>(this.url + "/disciplina", disciplina);
  }

  public put(disciplina: Disciplina): Observable<Disciplina>{
    return this.http.put<Disciplina>(this.url + "/disciplina", disciplina);
  }

  public delete(id: number){
    return this.http.delete(this.url + `/disciplina/${id}`);
  }
}
