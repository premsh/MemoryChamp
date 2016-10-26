import { Injectable } from '@angular/core';

@Injectable()
export class Randomizer {

    getRandomNumber(min: number = 0, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}