import { Component, OnInit } from '@angular/core';
import { PanteraService } from 'src/app/shared/pantera.service';
import { Panther } from "../../model/panther";
@Component({
  selector: 'app-panther-list',
  templateUrl: './panther-list.component.html',
  styleUrls: ['./panther-list.component.css']
})
export class PantherListComponent implements OnInit {


  pantherArray: Panther[] = [];

  selectedPanther: Panther = new Panther(0, "");

  constructor(private panteraService: PanteraService) { }

  ngOnInit(): void {
    this.panteraService.findAll().subscribe(panther => {this.pantherArray = panther});

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
