import { Component, Input } from '@angular/core';
import {CardModel} from './card.component';
@Component({
	selector: 'cards',
	template: `					  
				<table>
					<tr *ngFor="let cardmodelItem of cardmodels; trackBy : index">
						<td *ngFor="let cardmodel of cardmodelItem; trackBy : index">
							<card [cardmodel] = "cardmodel" (cardClicked) = "cardClicked($event)"> </card>
						</td>
					</tr>
				</table>
  				`
})
export class Cards {
	@Input() cardmodels;

	firstActiveCardModel : CardModel;
	secondActiveCardModel : CardModel;

	constructor() {
		this.firstActiveCardModel = undefined;
		this.secondActiveCardModel = undefined;
	}

	cardClicked(cardModel : CardModel) {
		console.log('got clicked!' , cardModel.cardContent.cardValue);
		if(this.firstActiveCardModel === undefined)
		{
			this.firstActiveCardModel = cardModel;
		}
		else {
			if(this.secondActiveCardModel === undefined)
			{
				this.secondActiveCardModel = cardModel;
				if(this.firstActiveCardModel.cardContent.cardValue === this.secondActiveCardModel.cardContent.cardValue)
				{
					alert('first match!' + this.firstActiveCardModel.cardContent.cardValue + this.secondActiveCardModel.cardContent.cardValue);
				}
				else {
					this.firstActiveCardModel.isFlip = false;
					this.secondActiveCardModel.isFlip = false;
					this.firstActiveCardModel = undefined;
					this.secondActiveCardModel = undefined;
				}
			}
		}

	}
}


