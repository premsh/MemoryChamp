import { Component, Input } from '@angular/core';
@Component({
  selector: 'card',
  template: `
  	<div class="flip-container" [class.flip] = "cardmodel.isFlip"  (click)="flipCard();">
		<div class="flipper">
			<div class="front">
				{{ cardmodel.frontContent }}
			</div>
			<div class="back">
				{{ cardmodel.backContent }}
			</div>
		</div>
	</div>
  				`
})
export class Card {
	@Input() cardmodel;

	constructor() {		
	}

	flipCard() : void {
		this.cardmodel.isFlip = !this.cardmodel.isFlip;
	}
}

export class CardModel {
	frontContent : string = 'front content from card model';
	backContent : string = 'back content from card model';
	isFlip : boolean = false;

	flipCard() : void {
		//alert('flip the card');
		this.isFlip = !this.isFlip;
	}
}



