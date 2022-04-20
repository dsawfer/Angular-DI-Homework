import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipCardsComponent } from './flip-cards.component';
import {FlipCardsListModule} from "./flip-cards-list/flip-cards-list.module";
import {FlipCardsCardModule} from "./flip-cards-card/flip-cards-card.module";
import {FlipCardsAddModule} from "./flip-cards-add/flip-cards-add.module";



@NgModule({
    declarations: [
        FlipCardsComponent
    ],
    exports: [
        FlipCardsComponent
    ],
    imports: [
        CommonModule,
        FlipCardsListModule,
        FlipCardsCardModule,
        FlipCardsAddModule
    ]
})
export class FlipCardsModule { }
