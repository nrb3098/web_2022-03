import { Component, OnInit } from '@angular/core';
import { Panther } from "../../model/panther";

@Component({
  selector: 'app-panther-create',
  templateUrl: './panther-create.component.html',
  styleUrls: ['./panther-create.component.css']
})
export class PantherCreateComponent implements OnInit {

  pantherArray: Panther[] = [
    {idPantera: 1, name: "Gold Vibranium Suit"},
    {idPantera: 2, name: "Diamond Vibranium Suit"},
    {idPantera: 3, name: "Black Vibranium Suit"},
    {idPantera: 4, name: "Nano-Vibranium Suit"}
  ];

  selectedPanther: Panther = new Panther(0, "");

  constructor() { }

  ngOnInit(): void {
  }

  editPanther(panther: Panther){
    this.selectedPanther = panther;

  }

  agregar(){
    if(this.selectedPanther.idPantera === 0){
      this.selectedPanther.idPantera = this.pantherArray.length + 1
      this.pantherArray.push(this.selectedPanther);
    }
    this.selectedPanther = new Panther(0, "");
  }

  deletePanther(id: number){
    if(confirm("¿Esta seguro que desea eliminar ese traje?")){
      this.pantherArray = this.pantherArray.filter(x => x != this.selectedPanther);
      this.selectedPanther = new Panther(0, "");
      console.log(id);
    }
  }
  

}
