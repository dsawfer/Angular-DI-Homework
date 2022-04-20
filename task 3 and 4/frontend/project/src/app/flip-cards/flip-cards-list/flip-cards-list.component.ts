import { Component, OnInit } from '@angular/core';
import {Card} from "../../../shared/models/Card";
import {CardService} from "../../../shared/services/card.service";



@Component({
  selector: 'app-flip-cards-list',
  templateUrl: './flip-cards-list.component.html',
  styleUrls: ['./flip-cards-list.component.less']
})
export class FlipCardsListComponent implements OnInit {

  cards: Card[] = [];
  flippedCardIndex: number = -1;

  constructor(public cardService: CardService) { }

  ngOnInit(): void {

  }

  changeCurrentFlippedCardIndex(index: number, isFlipped: boolean) {
    this.flippedCardIndex = isFlipped ? index : -1;
  }
}
