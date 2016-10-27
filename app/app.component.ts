import { Component, OnInit } from '@angular/core';
import { CardModel } from './card/cardModel.component';
import { CardFactory } from './shared/cardFactory/cardFactory';

@Component({
    selector: 'memory-game',
    template: '<h1>My First Angular App</h1> <cards [cardmodels] = "cardModels" *ngIf="cardModels.length > 1"></cards>'
})
export class BrainFart implements OnInit {
    cardModels = [];

    constructor(private cardFactory: CardFactory) {
    }

    ngOnInit() {        
        // this.cardModels = this.cardFactory.createCards(3, 4);
        this.cardModels = this.cardFactory.createCardsUsingObservable(3, 4);       
    }
}


