import { Component, OnInit } from '@angular/core';
import {Card} from "../../shared/models/Card";
import {CardService} from "../../shared/services/card.service";
import {CardFlipMemorizerService} from "../../shared/services/cardFlipMemorizer.service";

@Component({
  selector: 'app-flip-cards',
  templateUrl: './flip-cards.component.html',
  styleUrls: ['./flip-cards.component.less']
})
export class FlipCardsComponent implements OnInit {

  constructor(public cardService: CardService) {
  }

  ngOnInit(): void {
    this.cardService.initialize();
  }

  addCard(card: Card): void {
    this.cardService.addCard(card);
  }
}
