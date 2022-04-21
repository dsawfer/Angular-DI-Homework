import { Component, OnInit } from '@angular/core';
import {Card} from "../../../shared/models/Card";
import {CardService} from "../../../shared/services/card.service";
import {CardFlipMemorizerService} from "../../../shared/services/cardFlipMemorizer.service";

@Component({
  selector: 'app-flip-cards-list',
  templateUrl: './flip-cards-list.component.html',
  styleUrls: ['./flip-cards-list.component.less']
})
export class FlipCardsListComponent implements OnInit {

  cards: Card[] = [];

  constructor(public cardService: CardService,
              public cardFlipMemorizerService: CardFlipMemorizerService) {
  }

  ngOnInit(): void {
  }

  flipAll(): void {
    this.cardFlipMemorizerService.setAllFlipCards(this.cardService.cards);
  }

}
