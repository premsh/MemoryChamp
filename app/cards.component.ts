import { Component, Input } from '@angular/core';
@Component({
  selector: 'cards',
  template: `
  				<h1> 
  				this will be the list of cards!
  				</h1>
				  {{ cardmodels.length }}
  								  
				<table>
					<tr>
						<td *ngFor="let cardmodel of cardmodels; trackBy : index ">
							<card [cardmodel] = "cardmodel"> </card>
						</td>
					</tr>
				</table>
  				`
})
export class Cards { 
	@Input() cardmodels;
	constructor() {
		
	} 

}


