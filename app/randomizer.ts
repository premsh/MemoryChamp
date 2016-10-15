
export class Randomizer {

    getRandomNumber(min: number = 0, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getRandomIndex(originalArray: number[], occupiedArray: number[]): number {
        // get next random index from the available indices
        let nextRandomIndex = this.getRandomNumber(0, originalArray.length - occupiedArray.length-1);

        let validIndexFromOriginalArray = 0; // this index stores the index without considering occupied array indices

        // loop through original array to find the next random index
        for (let originalArrayIndex = 0; originalArrayIndex < originalArray.length; originalArrayIndex++) {
            
            var originalArrayIndexAlreadyExists = false;
            
            for (let usedArrayIndex = 0; usedArrayIndex < occupiedArray.length; usedArrayIndex++) {
                if (originalArrayIndex ===  occupiedArray[usedArrayIndex]) {
                    originalArrayIndexAlreadyExists = true;
                }
            }

            if(!originalArrayIndexAlreadyExists)
            {
                if(validIndexFromOriginalArray === nextRandomIndex)
                {
                    return originalArrayIndex;
                }
                else {
                    validIndexFromOriginalArray++;    
                }    
            }
        }

        //return 0;
    }
}