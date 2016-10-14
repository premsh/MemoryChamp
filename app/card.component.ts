import { Component, Input } from '@angular/core';
@Component({
  selector: 'card',
  template: `
  	<div class="flip-container" [class.flip] = "cardmodel.isFlip"  (click)="flipCard();">
		<div class="flipper">
			<div class="front" [ngStyle]="{'background': 'url(' + cardmodel.frontContent + ') 0 0  no-repeat'}">
				
			</div>
			<div class="back" [ngStyle]="{'background': 'url(' + cardmodel.backContent + ') 0 0  no-repeat'}">
				
			</div>
		</div>
	</div>`
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
	frontContent : string = 'app/images/minions.jpg';
	backContent : string = 'app/images/pyramid.jpg';
	isFlip : boolean = false;

	flipCard() : void {
		this.isFlip = !this.isFlip;
	}
}



