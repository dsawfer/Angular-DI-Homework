import {Injectable} from "@angular/core";
import {Card} from "../models/Card";

@Injectable({
  providedIn: 'root'
})
export class CardFlipMemorizerService {

  constructor() { }

  setFlipCard(card: Card): void {
    localStorage.setItem(card.id!, 'flipped');
  }

  getFlipCard(card: Card): string | null {
    return localStorage.getItem(card.id!)
  }

  clearFlipCard(card: Card): void {
    localStorage.removeItem(card.id!)
  }

  setAllFlipCards(cards: Card[]): void {
    for (const card of cards) {
      this.setFlipCard(card);
    }
  }

  checkFlipCards(cards: Card[]): void {
    let cardsInLocalStorage: Card[] = [];
    for (const card of cards) {
      if (this.getFlipCard(card)) cardsInLocalStorage.push(card);
    }

    localStorage.clear();

    for (const card of cardsInLocalStorage) {
      this.setFlipCard(card);
    }
  }
}
