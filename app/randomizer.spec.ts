import { Randomizer } from './randomizer';


describe('randomizer tests', () => {

    it('getRandomNumber_PassLowerAndUpperBound_ShouldGetRandomNumberBetweenThem', () => {
        // arrange
        let randomizer = new Randomizer();

        // act
        let randomNumber = randomizer.getRandomNumber(1, 5);

        // assert
        expect(randomNumber > 0 && randomNumber < 6).toBeTruthy();

        // assert
        expect(randomizer.getRandomNumber(5, 5)).toBe(5);
    });
});