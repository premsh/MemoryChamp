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
        for (let i = 0; i < numberOfCards; i++) {
            cardContents[i] = null;
        }

        let randomizer = new Randomizer();
        let randomIndexedCards = randomizer.getSetOfRandomIndex(numberOfCards);
        var cardData = new CardData();
        cardData.fillCardData();

        let originalArrayOfCards = new Array<number>();
        for (let i = 0; i < numberOfCards; i++) {
            originalArrayOfCards.push(i);
        }

        let usedIndices = new Array<number>();

        for (let i = 0; i < numberOfCards; i++) {
            if (cardContents[i] === null) {
                cardContents[i] = cardData.cardContents[randomIndexedCards[i]];
            }
            else {
                continue;
            }
            // push used index 
            usedIndices.push(i);

            // get new random index for pair
            let newRandomPairIndex = randomizer.getRandomIndex(originalArrayOfCards, usedIndices);
            if (cardContents[newRandomPairIndex] === null) {
                cardContents[newRandomPairIndex] = cardData.cardContents[randomIndexedCards[i]];
                usedIndices.push(newRandomPairIndex);
            }
        }
        return cardContents;
    }
}