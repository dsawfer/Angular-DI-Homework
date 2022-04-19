import {Component, OnInit} from '@angular/core';
import {Purchase} from '../../../shared/models/Purchase';
import {PurchasesService} from '../../../shared/services/purchases.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.less']
})
export class WalletComponent implements OnInit {
  expanded = false;
  openItemIndex?: number;

  constructor(public purchasesService: PurchasesService) {
  }

  ngOnInit(): void {
    this.purchasesService.initialize();
  }

  addPurchase(purchase: Purchase): void {
    this.purchasesService.addPurchase(purchase);
    this.toggle();
  }

  delPurchase(purchase: Purchase): void {
    this.purchasesService.delPurchase(purchase);
  }

  toggle(): void {
    this.expanded = !this.expanded;
  }

  toggleItem(index: number, currentState: boolean): void {
    this.openItemIndex = currentState ? index : -1;
  }
}
