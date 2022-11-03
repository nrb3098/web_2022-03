import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Panther } from '../model/panther';

@Injectable({
  providedIn: 'root'
})
export class PanteraService {
//http://localhost:8080/home
  constructor(private http: HttpClient) { }

  findAll(): Observable<Panther[]>{
    return this.http.get<Panther[]>("http://localhost:8080/home")
  }
}
