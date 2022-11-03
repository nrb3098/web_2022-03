import { Component, OnInit } from '@angular/core';
import { Suit } from 'src/app/model/suit';
import { SuitService } from 'src/app/shared/suit.service';

@Component({
  selector: 'app-suit-list',
  templateUrl: './suit-list.component.html',
  styleUrls: ['./suit-list.component.css']
})
export class SuitListComponent implements OnInit {

  suitArray: Suit[] =[];
  selectedSuit: Suit = new Suit(0,"","");

  constructor(private suitService: SuitService) { }

  ngOnInit(): void {
    this.suitService.findAll().subscribe(suit =>this.suitArray = suit);
  }
  prestamo(suit: Suit){
    this.selectedSuit = suit;
    suit.estado = "EN_USO";
    this.suitService.prestamo(suit).subscribe(suit => this.selectedSuit = suit);
  }
}
