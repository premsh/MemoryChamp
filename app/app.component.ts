import { Component, OnInit } from '@angular/core';
import { CardModel } from './card/cardModel.component';
import { CardFactory } from './cardFactory';

@Component({
    selector: 'brain-fart',
    template: '<h1>My First Angular App</h1> <cards [cardmodels] = "cardModels"></cards>'
})
export class BrainFart implements OnInit {
    cardModels: CardModel[];

    constructor(private cardFactory: CardFactory) {

    }

    ngOnInit() {
        this.cardModels = this.cardFactory.createCards(3, 4)
    }
}


