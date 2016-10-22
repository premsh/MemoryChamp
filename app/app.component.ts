import { Component } from '@angular/core';
import { CardModel }  from './card/card.component';
import { CardFactory } from './cardFactory';

@Component({
  selector: 'brain-fart',
  template: '<h1>My First Angular App</h1> <cards [cardmodels] = "cardModels"></cards>'
})
export class BrainFart { 
    cardModels : CardModel[];
    cardFactory : CardFactory;
    
    constructor() {
        this.cardFactory = new CardFactory();
        this.cardModels = this.cardFactory.createCards(3, 4);       
    }
}


