import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipCardsCardComponent } from './flip-cards-card.component';



@NgModule({
    declarations: [
        FlipCardsCardComponent
    ],
    exports: [
        FlipCardsCardComponent
    ],
    imports: [
        CommonModule
    ]
})
export class FlipCardsCardModule { }
