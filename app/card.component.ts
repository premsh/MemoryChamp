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
	@Input() cardmodel;

	constructor() {
	}

	flipCard(): void {
		this.cardmodel.isFlip = !this.cardmodel.isFlip;
	}
}

export class CardModel {
	frontContent: string = 'app/images/minions.jpg';
	cardContent : CardContent;
	isFlip: boolean = false;

	constructor(cardCon : CardContent) {
		this.cardContent = cardCon;
	}

	flipCard(): void {
		this.isFlip = !this.isFlip;
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
		this.cardContents.push(new CardContent('app/images/1.jpg', 1));
		this.cardContents.push(new CardContent('app/images/2.jpg', 1));
		this.cardContents.push(new CardContent('app/images/3.jpg', 1));
		this.cardContents.push(new CardContent('app/images/4.jpg', 1));
		this.cardContents.push(new CardContent('app/images/5.jpg', 1));
	}


}



