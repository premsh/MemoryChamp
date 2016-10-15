import { Randomizer }  from './randomizer';


describe('randomizer tests', () => {
    
    it('getRandomNumber_PassLowerAndUpperBound_ShouldGetRandomNumberBetweenThem',() => {
        // arrange
        let randomizer = new Randomizer(1, 5);
         
         // act
         let randomNumber = randomizer.getRandomNumber();

         // assert
         expect(randomNumber).toBeDefined();
    });
});