import { CardModel, CardContent, CardData } from './card/card.component';
import { Randomizer } from './randomizer';

export class CardFactory {
    cards: any[];

    constructor() {
        this.cards = [];
    }

    createCards(numberOfRows: number = 3, numberOfColumns: number = 3): any[] {
        let originalNumberOfColumns: number = numberOfColumns;
        let cardCounter = 0;
        let cardContents = this.createCardDeck(numberOfRows * numberOfColumns);
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

    createCardDeck(numberOfCards): Array<CardContent> {
        let cardContentDeck = new Array<CardContent>();
        let arrayOfNumbers = new Array<number>();
        let arrayOfRandomizedNumers = new Array<number>();

        let cardData = new CardData();
        cardData.fillCardData();

        for (let i = 0; i < numberOfCards; i++) {
            arrayOfNumbers.push(i);
        }

        for (let i = 0; i < numberOfCards / 2; i++) {
            let randomNumber = this.getRandomNumberFromArrayOfNumbers(arrayOfNumbers);
            arrayOfRandomizedNumers.push(randomNumber);
            arrayOfRandomizedNumers.push(randomNumber);
        }

        for (let i = 0; i < numberOfCards; i++) {
            var randomizedNumber = this.getRandomNumberFromArrayOfNumbers(arrayOfRandomizedNumers);
            cardContentDeck.push(cardData.cardContents[randomizedNumber]);
        }

        return cardContentDeck;
    }

    getRandomNumberFromArrayOfNumbers(arrayOfItems: Array<number>): number {
        var randomNumber = Math.floor(Math.random() * arrayOfItems.length);
        return arrayOfItems.splice(randomNumber, 1)[0];
    }
}