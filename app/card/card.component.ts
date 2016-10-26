import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardModel } from './cardModel.component';

@Component({
	selector: 'card',
	template: `
  	<div class="flip-container" [class.flip] = "cardmodel.isFlip"  (click)="flipCard();">
		<div class="flipper">
			<div class="front" [ngStyle]="{'background': 'url(' + cardmodel.frontContent + ') 0 0  no-repeat'}">
			</div>
			<div class="back" [ngStyle]="{'background': 'url(' + imagePrefex  + cardmodel.cardName + imageSuffix + ') 0 0  no-repeat'}">
			</div>
		</div>
	</div>`
})
export class Card {
	@Input() cardmodel : CardModel;
	@Output() cardClicked = new EventEmitter<CardModel>();

	imagePrefex = 'app/images/animals/';
	imageSuffix = '.jpg';

	constructor() {
	}

	flipCard(): void {
		this.cardmodel.flipCard();
		this.cardClicked.emit(this.cardmodel);
	}
}



