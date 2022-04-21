import {Inject, Injectable} from '@angular/core';
import {Card} from "../models/Card";
import {ICardApiService, ICardApiServiceToken} from "../interfaces/ICardApiService";
import {CardFlipMemorizerService} from "./cardFlipMemorizer.service";


@Injectable({
  providedIn: 'root'
})
export class CardService {

  private _cards: Card[] = [];
  public flippedCardIndex: number = -1;

  constructor(
    @Inject(ICardApiServiceToken)
    private cardApiService: ICardApiService,
    public cardFlipMemorizerService: CardFlipMemorizerService
  ) { }

  get cards(): Card[] {
    return this._cards;
  }

  initialize() {
    this.cardApiService.getAll().subscribe(cards => {
      this._cards = cards;
      this.cardFlipMemorizerService.checkFlipCards(this._cards);
    });
  }

  addCard(card: Card): void {
    this.cardApiService.add(card).subscribe(() => {
      this.initialize();
    });
  }

  deleteCard(card: Card): void {
    this.cardFlipMemorizerService.clearFlipCard(card);
    this.cardApiService.delete(card.id!).subscribe(() => {
      this.initialize();
    });
  }

  // flipCard(card: Card): void {
  //   if (card.state === "default") {
  //     card.state = "flipped";
  //   } else {
  //     card.state = "default";
  //   }
  //
  //   this.cardApiService.edit(card).subscribe(() => {
  //     this.initialize();
  //   });
  //
  // }
}
