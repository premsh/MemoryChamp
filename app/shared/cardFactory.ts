import { Injectable } from '@angular/core';
import { CardData } from '../card/card.component';
import { CardModel } from '../card/cardModel.component';
import { Randomizer } from './randomizer';

@Injectable()
export class CardFactory {
    cards: any[];

    // cardImages : string[] = ['bull', 'butterfly', ''];

    constructor(private randomizer: Randomizer) {
        this.cards = [];
    }

    createCards(numberOfRows: number = 3, numberOfColumns: number = 3): any[] {
        let originalNumberOfColumns: number = numberOfColumns;
        let cardCounter = 0;
        let cardModels = this.createCardModels(numberOfRows * numberOfColumns);
        console.log(cardModels);
        for (var i = 0; i < numberOfRows; i++) {
            this.cards[i] = [];
            while (numberOfColumns > 0) {
                let card = cardModels[cardCounter++];
                // card.cardId = cardCounter;
                this.cards[i].push(card);
                numberOfColumns--;
            }
            numberOfColumns = originalNumberOfColumns;
        }
        console.log('card models being returned', this.cards);
        return this.cards;
    }

    createCardModels(numberOfCards): Array<CardModel> {
        let cardModels = new Array<CardModel>();
        let arrayOfNumbers = new Array<number>();
        let arrayOfRandomizedNumers = new Array<number>();

        let cardData = new CardData();

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
            // var currentCard = cardData.cardModels[randomizedNumber];
            var currentCard =  cardData.getCardByIndex(randomizedNumber);            
            cardModels.push(currentCard);
        }

        console.log('card models are', cardModels);

        // for(let i = 0; i < numberOfCards; i++)
        // {
        //     cardModels[i].cardId = i;
        // }

        return cardModels;
    }

    getRandomNumberFromArrayOfNumbers(arrayOfItems: Array<number>): number {
        var randomNumber = Math.floor(Math.random() * arrayOfItems.length);
        return arrayOfItems.splice(randomNumber, 1)[0];
    }
}