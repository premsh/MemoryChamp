import { CardModel, CardContent, CardData } from './card.component';
import { Randomizer } from './randomizer';

export class CardFactory {
    cards: any[];

    constructor() {
        this.cards = [];
    }

    createCards(numberOfRows: number = 3, numberOfColumns: number = 3): any[] {
        let originalNumberOfColumns: number = numberOfColumns;
        let cardCounter = 0;
        let cardContents = this.createLinearCards(numberOfRows * numberOfColumns);
        for (var i = 0; i < numberOfRows; i++) {
            this.cards[i] = [];
            while (numberOfColumns > 0) {
                let card = new CardModel(cardContents[cardCounter++]);
                this.cards[i].push(card);
                numberOfColumns--;
            }
            numberOfColumns = originalNumberOfColumns;
        }
        return this.cards;
    }

    createLinearCards(numberOfCards: number): CardContent[] {
        let cardContents = new Array<CardContent>();

        let randomizer = new Randomizer();
        let randomIndexedCards = randomizer.getSetOfRandomIndex(numberOfCards);
        var cardData = new CardData();
        cardData.fillCardData();
        for (let i = 0; i < randomIndexedCards.length; i++) {
            cardContents.push(cardData.cardContents[randomIndexedCards[i]]);
        }
        return cardContents;
    }

    getRandomCardContent(): CardContent {
        // get random number
        var randomizer = new Randomizer();
        var randomContentIndex = randomizer.getRandomNumber(0, 13);

        // get random Card Content
        var cardData = new CardData();
        cardData.fillCardData();
        return cardData.cardContents[randomContentIndex];
    }
}