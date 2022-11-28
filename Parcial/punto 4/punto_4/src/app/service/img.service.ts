import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Img } from '../model/img';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImgService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Img[]>{
    return this.http.get<Img[]>("http://jsonplaceholder.typicode.com/albums/1/photos");
  }

}
