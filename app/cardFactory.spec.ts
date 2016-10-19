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

  it('createCardDeck_PassNoOfCard_ShouldReturnCardDeck', () => {
    // arrange
    var cardFactory = new CardFactory();

    // act
    var cardContentDeck = cardFactory.createCardDeck(12);

    // assert
    expect(cardContentDeck.length).toEqual(12);

  });

  it('getRandomArrayNumbers_PassArrayWithNumberOfRandomItemRequired_ShouldReturnRandomizedDeckOfCardOfGivenSize', () => {
    // arrange
    var cardFactory = new CardFactory();

    let arrayOfNumbers = [0, 1, 2];

    // act
    var firstRandomNumber = cardFactory.getRandomNumberFromArrayOfNumbers(arrayOfNumbers);

    // assert
    expect(firstRandomNumber >= 0 && firstRandomNumber <= 2).toBeTruthy();

    // act
    var secondRandomNumber = cardFactory.getRandomNumberFromArrayOfNumbers(arrayOfNumbers);
    // assert
    expect(secondRandomNumber >= 0 && secondRandomNumber <= 2).toBeTruthy();

    // act
    var thirdRandomNumber = cardFactory.getRandomNumberFromArrayOfNumbers(arrayOfNumbers);
    // assert
    expect(thirdRandomNumber >= 0 && thirdRandomNumber <= 2).toBeTruthy();

    expect(arrayOfNumbers.length).toEqual(0);

  });

});
