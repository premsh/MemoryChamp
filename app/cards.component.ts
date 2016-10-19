import { Component, Input } from '@angular/core';
import { CardModel } from './card.component';
@Component({
	selector: 'cards',
	template: `			
				<h1> Sets to match {{ setsToMatch }} </h1>
				<h2> {{ message }} </h2>		  
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

	setsToMatch: number = 6;
	message: string = '';

	firstActiveCardModel: CardModel;
	secondActiveCardModel: CardModel;

	constructor() {
		this.firstActiveCardModel = undefined;
		this.secondActiveCardModel = undefined;
	}

	cardClicked(cardModel: CardModel) {
		let gameMessage = new GameMessage();
		console.log('got clicked!', cardModel.cardContent.cardValue);
		if (this.firstActiveCardModel === undefined) {
			this.firstActiveCardModel = cardModel;
		}
		else {
			if (this.secondActiveCardModel === undefined) {
				this.secondActiveCardModel = cardModel;
				if (this.firstActiveCardModel.cardContent.cardValue === this.secondActiveCardModel.cardContent.cardValue) {
					this.firstActiveCardModel = undefined;
					this.secondActiveCardModel = undefined;
					this.message = gameMessage.goodJobMessage;
					this.setsToMatch--;
					if(this.setsToMatch === 0)
					{
						this.message = gameMessage.allMatchedMessage;
					}
				}
				else {
					this.flipCardsAfterGivenSeconds(this.firstActiveCardModel, this.secondActiveCardModel, 2000);
					this.firstActiveCardModel = undefined;
					this.secondActiveCardModel = undefined;
					this.message = gameMessage.keepTryingMessage;
				}
			}
		}
	}

	flipCardsAfterGivenSeconds(firstCard: CardModel, secondCard: CardModel, milliseconds: number): void {
		setTimeout(function () {
			firstCard.isFlip = false;
			secondCard.isFlip = false;
		}, milliseconds);
	}
}


export class GameMessage {
	welcomeMessage : string = 'Welcome to the Memory Game!';
	goodJobMessage: string = 'Good Job! Keep matching the pairs!';
	keepTryingMessage: string = 'You almost had that! Keep trying!';
	allMatchedMessage: string = 'Woo hoo!! Great! You have matched all the pairs! You are off to next level now!';
}