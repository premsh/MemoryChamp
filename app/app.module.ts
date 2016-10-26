import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrainFart }   from './app.component';
import { Cards } from './cardGrid/cards.component';
import { Card } from './card/card.component';
import { CardFactory } from './cardFactory';
import { Randomizer } from './randomizer';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ BrainFart, Cards, Card],
  providers : [CardFactory, Randomizer],
  bootstrap:    [ BrainFart ]
})
export class AppModule { }



