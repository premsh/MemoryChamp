import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { BrainFart }   from './app.component';
import { Cards } from './cardGrid/cards.component';
import { Card } from './card/card.component';
import { CardFactory } from './shared/cardFactory/cardFactory';
import { Randomizer } from './shared/randomizer/randomizer';
import { DataService } from './shared/dataService/dataService';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ BrainFart, Cards, Card],
  providers : [CardFactory, Randomizer, HttpModule, DataService],
  bootstrap:    [ BrainFart ]
})
export class AppModule { }



