export class CardModel {
	frontContent: string = 'app/images/frontImage.jpg';
    cardName : string;
	isFlip: boolean = false;

	constructor(cardName : string) {
        this.cardName = cardName;
	}

	flipCard(): void {
		if (!this.isFlip) {
			this.isFlip = !this.isFlip;
		}
	}
}