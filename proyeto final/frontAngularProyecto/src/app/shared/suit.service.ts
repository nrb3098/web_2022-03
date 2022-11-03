import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Suit } from '../model/suit';

@Injectable({
  providedIn: 'root'
})
export class SuitService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Suit[]>{
    return this.http.get<Suit[]>("http://localhost:8080/suits");
  }

  prestamo(suit: Suit){
    return this.http.put<Suit>("http://localhost:8080/prestarSuit", suit);
  }
}
