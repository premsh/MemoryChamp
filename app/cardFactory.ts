import { CardModel } from './card.component';

export class CardFactory {
    cards: any[];

    constructor() {
        this.cards = [];
    }

    createCards(numberOfCards: number, numberOfRows: number): CardModel[] {
        let originalNumberOfCards : number = numberOfCards;
        for (var i = 0; i < numberOfRows; i++) {
            this.cards[i] = [];
            while (numberOfCards > 0) {
                let card = new CardModel();
                this.cards[i].push(card);
                numberOfCards--;
            }
            numberOfCards = originalNumberOfCards; 
        }
        return this.cards;
    }
}