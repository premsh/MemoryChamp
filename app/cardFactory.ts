import { CardModel, CardContent } from './card.component';

export class CardFactory {
    cards: any[];

    constructor() {
        this.cards = [];
    }

    createCards(numberOfCards: number = 3, numberOfRows: number = 3): any[] {
        let originalNumberOfCards : number = numberOfCards;
        for (var i = 0; i < numberOfRows; i++) {
            this.cards[i] = [];
            while (numberOfCards > 0) {
                let cardContent = new CardContent('app/images/1.jpg',1);
                let card = new CardModel(cardContent);
                this.cards[i].push(card);
                numberOfCards--;
            }
            numberOfCards = originalNumberOfCards; 
        }
        return this.cards;
    }
}