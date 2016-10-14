import { Component, Input } from '@angular/core';
@Component({
  selector: 'cards',
  template: `
  				<h1> 
  				this will be the list of cards!
  				</h1>
				  {{ cardmodels.length }}
  								  
				<table>
					<tr *ngFor="let cardmodelItem of cardmodels; trackBy : index">
						<td *ngFor="let cardmodel of cardmodelItem; trackBy : index">
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


