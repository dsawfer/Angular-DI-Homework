import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipCardsListComponent } from './flip-cards-list.component';
import {FlipCardsCardModule} from "../flip-cards-card/flip-cards-card.module";



@NgModule({
  declarations: [
    FlipCardsListComponent
  ],
  exports: [
    FlipCardsListComponent
  ],
    imports: [
        CommonModule,
        FlipCardsCardModule
    ]
})
export class FlipCardsListModule { }
