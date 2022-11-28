import { Component } from '@angular/core';
import { Url } from 'url';
import { Img } from './model/img';
import { ImgService } from './service/img.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'punto_4';
  constructor(private imgService: ImgService) { }

  imgArray: Img[] = [];
  selectedImg = new Img(0,0,"","","");

  ngOnInit(): void {
    this.imgService.findAll().subscribe(img =>this.imgArray = img);
    console.log(this.imgArray)
  }

  seleccionada(img: Img){
    this.selectedImg = img

  }

}
