import { CardFactory } from './cardFactory'


describe('1st tests', () => {
  it('true is true', () => expect(true).toBe(true));

  it('createCards_PassNumberOfCards_ShouldGetArrayOfCardsBack', () => {
      // arrange
    var cardFactory  = new CardFactory();

    // act
    var cards = cardFactory.createCards(9); 

    // assert
    expect(cards.length).toEqual(9);
    });

});
