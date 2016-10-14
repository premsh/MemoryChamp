import { Component, Input } from '@angular/core';
@Component({
  selector: 'cards',
  template: `
  				<h1> 
  				this will be the list of cards!
  				</h1>
				  {{ cards.length }}
  				<card> </card>
				  
  				`
})
export class Cards { 
	@Input() cards;

	/**
	 *
	 */
	constructor() {
		
	} 

}


