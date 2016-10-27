import { Injectable } from '@angular/core';
import { CardModel } from '../../card/cardModel.component';
import { Randomizer } from '../randomizer/randomizer';
import { DataService } from '../dataService/dataService';


@Injectable()
export class CardFactory {
    cards: any[];
    cardImages: string[];

    constructor(private randomizer: Randomizer, private dataService: DataService) {
        this.cards = [];
    }

    // cardImages: string[] = ['bull', 'butterfly', 'cat', 'dog', 'earthworm', 'larva', 'lion', 'monkey', 'panda', 'peacock', 'penguin', 'snail', 'snake', 'twitter'];

    createCards(numberOfRows: number = 3, numberOfColumns: number = 3): any[] {

        // this.dataService.getImageNamesThroughJSONPromise().then((data) => {
        //     console.log('promise data from consumer', data.imageNames);

        //     this.cardImages = data.imageNames;

        //     let originalNumberOfColumns: number = numberOfColumns;
        //     let cardCounter = 0;
        //     let cardModels = this.createCardModels(numberOfRows * numberOfColumns);
        //     for (var i = 0; i < numberOfRows; i++) {
        //         this.cards[i] = [];
        //         while (numberOfColumns > 0) {
        //             let card = cardModels[cardCounter++];
        //             this.cards[i].push(card);
        //             numberOfColumns--;
        //         }
        //         numberOfColumns = originalNumberOfColumns;
        //     }
        //     return this.cards;
        // }, () => {
        //     console.log('something went wrong!');
        // });

        // this.dataService.getImageNamesThroughMockData().then((data) => {

        // }, (error) => {
        //     console.log('something went wrong while getting const values', error);
        // });
        return this.cards;
    }

    createCardsUsingObservable(numberOfRows: number = 3, numberOfColumns: number = 3): any[] {
        this.dataService.getImageNamesThroughJSONObservable()
            .subscribe((data : any) => {
                // do work

                this.cardImages = data.imageNames;

                let originalNumberOfColumns: number = numberOfColumns;
                let cardCounter = 0;
                let cardModels = this.createCardModels(numberOfRows * numberOfColumns);
                for (var i = 0; i < numberOfRows; i++) {
                    this.cards[i] = [];
                    while (numberOfColumns > 0) {
                        let card = cardModels[cardCounter++];
                        this.cards[i].push(card);
                        numberOfColumns--;
                    }
                    numberOfColumns = originalNumberOfColumns;
                }
                return this.cards;
            }, 
            (error : any) => {
                console.log(error);
            }, 
            () => {
                console.log('im cleaning up anything!');    
            });

            return this.cards;
    }

    createCardModels(numberOfCards): Array<CardModel> {
        let cardModels = new Array<CardModel>();
        let arrayOfNumbers = new Array<number>();
        let arrayOfRandomizedNumers = new Array<number>();

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
            var currentCard = this.getCardByIndex(randomizedNumber);
            cardModels.push(currentCard);
        }

        return cardModels;
    }

    getCardByIndex(index: number): CardModel {
        let cardImage = this.cardImages[index];
        let cardModel = new CardModel(cardImage);
        return cardModel;
    }

    getRandomNumberFromArrayOfNumbers(arrayOfItems: Array<number>): number {
        var randomNumber = Math.floor(Math.random() * arrayOfItems.length);
        return arrayOfItems.splice(randomNumber, 1)[0];
    }
}