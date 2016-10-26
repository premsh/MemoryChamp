
import { Card } from './card.component';
import { CardModel } from './cardModel.component';

describe('cardModel specs', () => {

    it('flipCard_WhenflipCardIsCalled_CardShouldFlip', () => {
        // arrange 
        let cardModel = new CardModel('some string');

        // act
        cardModel.flipCard();

        // assert
        expect(cardModel.isFlip).toEqual(true);
    });

        it('flipCard_WhenflipCardIsCalledOnFlippedCard_NothingShoudlHappen', () => {
        // arrange 
        let cardModel = new CardModel('some string');
        cardModel.isFlip = true;

        // act
        cardModel.flipCard();

        // assert
        expect(cardModel.isFlip).toEqual(true);
    });
});