
import { CardModel, CardContent } from './card.component';

describe('cardModel specs', () => {

    it('flipCard_WhenflipCardIsCalled_CardShouldFlip', () => {
        // arrange 
        let cardModel = new CardModel(new CardContent('some string', 4));

        // act
        cardModel.flipCard();

        // assert
        expect(cardModel.isFlip).toEqual(true);
    });

        it('flipCard_WhenflipCardIsCalledOnFlippedCard_NothingShoudlHappen', () => {
        // arrange 
        let cardModel = new CardModel(new CardContent('some string', 4));
        cardModel.isFlip = true;

        // act
        cardModel.flipCard();

        // assert
        expect(cardModel.isFlip).toEqual(true);
    });
});