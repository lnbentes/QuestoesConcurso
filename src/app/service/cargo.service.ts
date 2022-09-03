import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable } from 'rxjs';
import { Cargo } from '../model/Cargo';
import { NomeModel } from '../model/NomeModel';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  private url = "http://localhost:8080";

  constructor(
    private http: HttpClient
  ) {}

  token = {
    // headers: new HttpHeaders().set("Authorization", environment.token)
  }

  public getAll(): Observable<Cargo[]>{
    return this.http.get<Cargo[]>(this.url + "/cargo");
  }

  public getById(id: number): Observable<Cargo>{
    return this.http.get<Cargo>(this.url + `/cargo/${id}`);
  }

  public getAllNome(): Observable<NomeModel[]>{
    return this.http.get<NomeModel[]>(this.url + "/cargo/nome");
  }

  public findByNome(nome: string): Observable<Cargo>{
    return this.http.get<Cargo>(this.url + `/cargo/nome/${nome}`);
  }

  public post(cargo: Cargo): Observable<Cargo>{
    return this.http.post<Cargo>(this.url + "/cargo", cargo);
  }

  public put(cargo: Cargo): Observable<Cargo>{
    return this.http.put<Cargo>(this.url + "/cargo", cargo);
  }

  public delete(id: number){
    return this.http.delete(this.url + `/cargo/${id}`);
  }
}
