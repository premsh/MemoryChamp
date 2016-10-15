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

    // it('getRandomIndex_PassOriginalArrayAndOccuriedIndexes_ReturnsSomeIndex', () => {
    //     // arrange 
    //     let randomizer = new Randomizer();

    //     // act 
    //     let originalArray: number[] = [4, 5, 8, 9];
    //     let occupiedArrayIndexes: number[] = [];
    //     let randomIndex = randomizer.getRandomIndex(originalArray, occupiedArrayIndexes);

    //     // assert  
    //     expect(randomIndex).toBeDefined();
    // });

    it('getRandomIndex_PassOriginalArrayAndUsedIndexes_ReturnsNewRandomIndex', () => {
        // arrange 
        let randomizer = new Randomizer();

        // act 
        let originalArray: number[] = [4, 5, 3];
        let occupiedArrayIndexes: number[] = [];
        occupiedArrayIndexes.push(1); // push index 1 of value 5
        let randomIndex = randomizer.getRandomIndex(originalArray, occupiedArrayIndexes);

        // assert  
        console.log(randomIndex);
        expect(randomIndex === 0 || randomIndex === 2).toBeTruthy();
    });
});