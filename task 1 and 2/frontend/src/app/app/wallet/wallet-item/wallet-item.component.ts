import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Purchase} from '../../../../shared/models/Purchase';
import {PurchasesService} from "../../../../shared/services/purchases.service";

@Component({
  selector: 'app-wallet-item',
  templateUrl: './wallet-item.component.html',
  styleUrls: ['./wallet-item.component.less']
})
export class WalletItemComponent {
  @Input()
  purchase!: Purchase;

  @Input()
  expanded = false;

  @Output()
  delete = new EventEmitter<Purchase>();

  @Output()
  expandedChange = new EventEmitter<boolean>()

  editExpanded = false;

  constructor(public purchasesService: PurchasesService) {
  }

  editPurchase(newEditDataPurchase: Purchase): void {
    if (newEditDataPurchase.comment) {
      this.purchasesService.editPurchase({
        id: this.purchase.id!,
        title: newEditDataPurchase.title,
        price: newEditDataPurchase.price,
        comment: newEditDataPurchase.comment,
      });
    } else {
      this.purchasesService.editPurchase({
        id: this.purchase.id!,
        title: newEditDataPurchase.title,
        price: newEditDataPurchase.price,
      });
    }

    this.toggleEdit();
    this.toggle();
  }

  get formattedPrice(): string {
    return `${this.purchase.price} ₽`;
  }

  onClick() {
    this.delete.next(this.purchase);
  }

  toggle() {
    this.expanded = !this.expanded;
    this.expandedChange.emit(this.expanded);
  }

  toggleEdit() {
    this.editExpanded = !this.editExpanded;
  }
}
