import { Card } from './card.component';

export class CardFactory {
    cards : Card[];

    /**
     *
     */
    constructor() {
        this.cards = new Array<Card>();
        
    }

    createCards(numberOfCards : number) : Card[]  {
        
        while(numberOfCards > 0)
        {
            let card = new Card();
            this.cards.push(card);
            numberOfCards--;
        }
        return this.cards;
    }
}