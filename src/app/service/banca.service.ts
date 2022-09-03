import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable } from 'rxjs';
import { Banca } from '../model/Banca';
import { NomeModel } from '../model/NomeModel';

@Injectable({
  providedIn: 'root'
})
export class BancaService {

  private url = "http://localhost:8080";

  constructor(
    private http: HttpClient
  ) {}

  token = {
    // headers: new HttpHeaders().set("Authorization", environment.token)
  }

  public getAll(): Observable<Banca[]>{
    return this.http.get<Banca[]>(this.url + "/banca");
  }

  public getById(id: number): Observable<Banca>{
    return this.http.get<Banca>(this.url + `/banca/${id}`);
  }

  public getAllNome(): Observable<NomeModel[]>{
    return this.http.get<NomeModel[]>(this.url + "/banca/nome");
  }

  public findByNome(nome: string): Observable<Banca>{
    return this.http.get<Banca>(this.url + `/banca/nome/${nome}`);
  }

  public post(banca: Banca): Observable<Banca>{
    return this.http.post<Banca>(this.url + "/banca", banca);
  }

  public put(banca: Banca): Observable<Banca>{
    return this.http.put<Banca>(this.url + "/banca", banca);
  }

  public delete(id: number){
    return this.http.delete(this.url + `/banca/${id}`);
  }
}
