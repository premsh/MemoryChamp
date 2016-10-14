import { CardModel } from './card.component';

export class CardFactory {
    cards : CardModel[];

    constructor() {
        this.cards = new Array<CardModel>();
        
    }

    createCards(numberOfCards : number) : CardModel[]  {
        
        while(numberOfCards > 0)
        {
            let card = new CardModel();
            this.cards.push(card);
            numberOfCards--;
        }
        return this.cards;
    }
}