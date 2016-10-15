import { CardModel, CardContent, CardData } from './card.component';
import { Randomizer }  from './randomizer';

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
                let cardContent = this.getRandomCardContent();
                let card = new CardModel(cardContent);
                this.cards[i].push(card);
                numberOfCards--;
            }
            numberOfCards = originalNumberOfCards; 
        }
        return this.cards;
    }

    getRandomCardContent() : CardContent {
        // get random number
        var randomizer = new Randomizer(1,13);
        var randomContentIndex = randomizer.getRandomNumber();

        // get random Card Content
        var cardData = new CardData();
        cardData.fillCardData();
        return cardData.cardContents[randomContentIndex];
    }
}