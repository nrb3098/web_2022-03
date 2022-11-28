import { Component } from '@angular/core';
import { Ingrediente } from './model/ingrediente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'punto_3';

  ingredientesDerecha = ["pan","queso","lechuga","tomate","carne"];
  ingredientesIzquierda: string[] = [];
  selectedIngrediente1: string ="";
  selectedIngrediente2: string="";
  agregar(ingrediente: string){
    this.selectedIngrediente1 = ingrediente;
    const index = this.ingredientesDerecha.indexOf(this.selectedIngrediente1.toString(),0);
    if (index > -1) {
      this.ingredientesIzquierda.push(this.selectedIngrediente1.toString())
      this.ingredientesDerecha.splice(index,1);
    }
  }

  quitar(ingrediente: string){
    this.selectedIngrediente2 = ingrediente;
    const index2 = this.ingredientesIzquierda.indexOf(this.selectedIngrediente2.toString(),0);
    if (index2 > -1) {
      this.ingredientesIzquierda.splice(index2,1);
      this.ingredientesDerecha.push(this.selectedIngrediente2)
    }
  }
}
