import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrainFart }   from './app.component';
import { Cards } from './cards.component';
import { Card } from './card.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ BrainFart, Cards, Card ],
  bootstrap:    [ BrainFart ]
})
export class AppModule { }
