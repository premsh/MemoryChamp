import { CardModel, CardContent, CardData } from './card.component';
import { Randomizer } from './randomizer';

export class CardFactory {
    cards: any[];

    constructor() {
        this.cards = [];
    }

    createCards(numberOfRows: number = 3, numberOfColumns: number = 3): any[] {
        let originalNumberOfColumns: number = numberOfColumns;
        for (var i = 0; i < numberOfRows; i++) {
            this.cards[i] = [];
            while (numberOfColumns > 0) {
                let cardContent = this.getRandomCardContent();
                let card = new CardModel(cardContent);
                this.cards[i].push(card);
                numberOfColumns--;
            }
            numberOfColumns = originalNumberOfColumns;
        }
        return this.cards;
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