import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipCardsAddComponent } from './flip-cards-add.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    FlipCardsAddComponent
  ],
  exports: [
    FlipCardsAddComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class FlipCardsAddModule { }
