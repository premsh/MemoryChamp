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

    it('getRandomIndex_PassOriginalArrayAndUsedIndexes_ReturnsNewRandomIndex', () => {
        // arrange 
        let randomizer = new Randomizer();

        // act 
        let originalArray: number[] = [0, 1, 2];
        let occupiedArrayIndexes: number[] = [];
        occupiedArrayIndexes.push(1); // push index 1 of value 5
        let randomIndex = randomizer.getRandomIndex(originalArray, occupiedArrayIndexes);

        // assert  
        expect(randomIndex === 0 || randomIndex === 2).toBeTruthy();
    });

    it('getSetOfRandomIndex_PassLengthOfIndices_ShoudlGetRandomIndicesBack', () => {
        // arrange 
        let randomizer = new Randomizer();

        // act
        let randomIndices = randomizer.getSetOfRandomIndex(13);

        // assert
        expect(randomIndices.length).toBe(13);
    });
});