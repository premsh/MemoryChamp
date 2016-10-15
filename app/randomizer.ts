
export class Randomizer {

    lowerBound : number;
    upperBound : number;

    constructor(lowBound : number, upBound : number) {
        this.lowerBound = lowBound;
        this.upperBound = upBound;
    }

    getRandomNumber() : number {
        var min = this.lowerBound;
        var max = this.upperBound;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}