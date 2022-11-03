import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Panther } from "../model/panther";
@Injectable({
  providedIn: 'root'
})
export class PersonService {
  //http://localhost:8080/home
  constructor(private http: HttpClient){}

  findAll(){
    return this.http.get<Panther[]>("http://localhost:8080/home")
  }
}
