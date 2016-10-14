import { CardFactory } from './cardFactory'


describe('1st tests', () => {
  it('true is true', () => expect(true).toBe(true));

  it('createCards_PassNumberOfCards_ShouldGetArrayOfCardsBack', () => {
      // arrange
    var cardFactory  = new CardFactory();

    // act
    var cardModels = cardFactory.createCards(9); 

    // assert
    expect(cardModels.length).toEqual(9);
    });

});
