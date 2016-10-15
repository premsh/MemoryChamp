import { CardFactory } from './cardFactory';
import { CardContent } from './card.component';


describe('1st tests', () => {
  it('true is true', () => expect(true).toBe(true));

  it('createCards_PassGridSize_ShouldGetMultidimentionalArray', () => {
    // arrange
    var cardFactory = new CardFactory();

    // act
    var cardModels = cardFactory.createCards(3, 3);

    // assert
    expect(cardModels.length).toEqual(3);
    expect(cardModels[0].length).toEqual(3);

  });

    it('createCards_PassNoGridSize_ShouldGetDefaultArray', () => {
    // arrange
    var cardFactory = new CardFactory();

    // act
    var cardModels = cardFactory.createCards();

    // assert
    expect(cardModels.length).toEqual(3);
    expect(cardModels[0].length).toEqual(3);

  });

  it('getRandomCardContent_PassNothing_ShoudlGetRandomCardContentBack', () => {
      // arrange 
      let cardFactory = new CardFactory();

      // act
      let randomCardContent = cardFactory.getRandomCardContent();

      // assert
      expect(randomCardContent).toEqual(jasmine.any(CardContent));
  });

});
