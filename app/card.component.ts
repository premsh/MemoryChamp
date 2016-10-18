import { Component, Input } from '@angular/core';
@Component({
	selector: 'card',
	template: `
  	<div class="flip-container" [class.flip] = "cardmodel.isFlip"  (click)="flipCard();">
		<div class="flipper">
			<div class="front" [ngStyle]="{'background': 'url(' + cardmodel.frontContent + ') 0 0  no-repeat'}">
				
			</div>
			<div class="back" [ngStyle]="{'background': 'url(' + cardmodel.cardContent.cardContent + ') 0 0  no-repeat'}">
				
			</div>
		</div>
	</div>`
})
export class Card {
	@Input() cardmodel : CardModel;

	constructor() {
	}

	flipCard(): void {
		this.cardmodel.flipCard();
	}
}

export class CardModel {
	frontContent: string = 'app/images/frontImage.jpg';
	cardContent: CardContent;
	isFlip: boolean = false;

	constructor(cardCon: CardContent) {
		this.cardContent = cardCon;
	}

	flipCard(): void {
		if (!this.isFlip) {
			this.isFlip = !this.isFlip;
		}
	}
}

export class CardContent {
	cardContent: string;
	cardValue: number;

	constructor(cardCon: string, cardVal: number) {
		this.cardContent = cardCon;
		this.cardValue = cardVal;
	}
}

export class CardData {
	cardContents: CardContent[];

	constructor() {
		this.cardContents = new Array<CardContent>();
		this.fillCardData();
	}

	fillCardData(): void {
		this.cardContents.push(new CardContent('app/images/animals/bull.png', 1));
		this.cardContents.push(new CardContent('app/images/animals/butterfly.jpg', 2));
		this.cardContents.push(new CardContent('app/images/animals/cat.jpg', 3));
		this.cardContents.push(new CardContent('app/images/animals/dog.jpg', 4));
		this.cardContents.push(new CardContent('app/images/animals/earthworm.png', 5));
		this.cardContents.push(new CardContent('app/images/animals/larva.jpg', 6));
		this.cardContents.push(new CardContent('app/images/animals/lion.jpg', 7));
		this.cardContents.push(new CardContent('app/images/animals/monkey.jpg', 8));
		this.cardContents.push(new CardContent('app/images/animals/panda.jpg', 9));
		this.cardContents.push(new CardContent('app/images/animals/peacock.jpg', 10));
		this.cardContents.push(new CardContent('app/images/animals/penguin.png', 11));
		this.cardContents.push(new CardContent('app/images/animals/snail.jpg', 12));
		this.cardContents.push(new CardContent('app/images/animals/snake.png', 13));
		this.cardContents.push(new CardContent('app/images/animals/twitter.png', 14));
	}
}



