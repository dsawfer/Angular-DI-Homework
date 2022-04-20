import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FlipCardsModule} from "./flip-cards/flip-cards.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlipCardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
