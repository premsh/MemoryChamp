import { Component } from '@angular/core';
@Component({
  selector: 'card',
  template: `
  	<div class="flip-container" [class.flip] = "isFlip"  (click)="flipCard();">
		<div class="flipper">
			<div class="front">
				front content
			</div>
			<div class="back">
				back content
			</div>
		</div>
	</div>
  				`
})
export class Card { 
	isFlip :boolean = false;

	flipCard() : void {
		//alert('flip the card');
		this.isFlip = !this.isFlip;
	}

}





