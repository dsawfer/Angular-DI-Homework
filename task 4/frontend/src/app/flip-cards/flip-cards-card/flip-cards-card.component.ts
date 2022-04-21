import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Card} from "../../../shared/models/Card";
import {CardService} from "../../../shared/services/card.service";
import {CardFlipMemorizerService} from "../../../shared/services/cardFlipMemorizer.service";

@Component({
  selector: 'app-flip-cards-card',
  templateUrl: './flip-cards-card.component.html',
  styleUrls: ['./flip-cards-card.component.less']
})
export class FlipCardsCardComponent implements OnInit {

  @Input()
  cardData!: Card;

  @Input()
  isFlipped = false

  flipStopper = false;

  constructor(public cardService: CardService,
              public cardFlipMemorizerService: CardFlipMemorizerService) {
  }

  ngOnInit(): void {
  }

  flip(): void {
    if (!this.flipStopper) {
      this.flipStopper = true;

      this.isFlipped = !this.isFlipped

      if (this.isFlipped) {
        this.cardFlipMemorizerService.setFlipCard(this.cardData);
      } else {
        this.cardFlipMemorizerService.clearFlipCard(this.cardData);
      }

      setTimeout(() => {
        this.flipStopper = false;
      }, 800)
    }
  }

  deleteCard(): void {
    this.cardService.deleteCard(this.cardData);
  }
}
