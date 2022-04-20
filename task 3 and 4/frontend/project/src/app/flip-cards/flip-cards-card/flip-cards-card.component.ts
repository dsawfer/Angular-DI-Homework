import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Card} from "../../../shared/models/Card";
import {CardService} from "../../../shared/services/card.service";

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

  @Output()
  flippedChange = new EventEmitter<boolean>()

  constructor(public cardService: CardService) {}

  ngOnInit(): void {
  }

  flip(): void {
    this.isFlipped = !this.isFlipped
    this.flippedChange.emit(this.isFlipped);

    if (this.cardData.state === "default") {
      this.cardData.state = "flipped";
    } else {
      this.cardData.state = "default";
    }
  }

  deleteCard(): void {
    this.cardService.deleteCard(this.cardData);
  }
}
