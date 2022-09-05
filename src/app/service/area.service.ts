import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable } from 'rxjs';
import { AreaDeConhecimento } from '../model/AreaDeConhecimento';
import { NomeModel } from '../model/NomeModel';

@Injectable({
  providedIn: 'root'
})
export class AreaServiceService {

  // private url = "http://localhost:8080";
  private url = "https://dashboard.heroku.com";

  constructor(
    private http: HttpClient
  ) {}

  token = {
    // headers: new HttpHeaders().set("Authorization", environment.token)
  }

  public getAll(): Observable<AreaDeConhecimento[]>{
    return this.http.get<AreaDeConhecimento[]>(this.url + "/conhecimento");
  }

  public getById(id: number): Observable<AreaDeConhecimento>{
    return this.http.get<AreaDeConhecimento>(this.url + `/conhecimento/${id}`);
  }

  public getAllNome(): Observable<NomeModel[]>{
    return this.http.get<NomeModel[]>(this.url + "/conhecimento/nome");
  }

  public findByNome(nome: string): Observable<AreaDeConhecimento>{
    return this.http.get<AreaDeConhecimento>(this.url + `/conhecimento/nome/${nome}`);
  }

  public post(area: AreaDeConhecimento): Observable<AreaDeConhecimento>{
    return this.http.post<AreaDeConhecimento>(this.url + "/conhecimento", area);
  }

  public put(area: AreaDeConhecimento): Observable<AreaDeConhecimento>{
    return this.http.put<AreaDeConhecimento>(this.url + "/conhecimento", area);
  }

  public delete(id: number){
    return this.http.delete(this.url + `/conhecimento/${id}`);
  }
}
