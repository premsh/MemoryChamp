import { Component } from '@angular/core';
@Component({
  selector: 'card',
  template: `
  	<div class="flip-container" [class.flip] = "cardModel.isFlip"  (click)="flipCard();">
		<div class="flipper">
			<div class="front">
				{{ cardModel.frontContent }}
			</div>
			<div class="back">
				{{ cardModel.backContent }}
			</div>
		</div>
	</div>
  				`
})
export class Card {
	cardModel : CardModel;

	constructor() {
		this.cardModel = new CardModel();		
	}

	flipCard() : void {
		this.cardModel.isFlip = !this.cardModel.isFlip;
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



