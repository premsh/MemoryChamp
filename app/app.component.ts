import { Component } from '@angular/core';
import { Card }  from './card.component';
import { CardFactory } from './cardFactory';

@Component({
  selector: 'brain-fart',
  template: '<h1>My First Angular App</h1> <cards [cards] = "cards"></cards>'
})
export class BrainFart { 
    cards : Card[];
    cardFactory : CardFactory;
    /**
     *
     */
    constructor() {
        this.cardFactory = new CardFactory();
        this.cards = this.cardFactory.createCards(9);       
    }
}


