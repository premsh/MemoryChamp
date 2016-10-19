"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Cards = (function () {
    function Cards() {
        this.firstActiveCardModel = undefined;
        this.secondActiveCardModel = undefined;
    }
    Cards.prototype.cardClicked = function (cardModel) {
        console.log('got clicked!', cardModel.cardContent.cardValue);
        if (this.firstActiveCardModel === undefined) {
            this.firstActiveCardModel = cardModel;
        }
        else {
            if (this.secondActiveCardModel === undefined) {
                this.secondActiveCardModel = cardModel;
                if (this.firstActiveCardModel.cardContent.cardValue === this.secondActiveCardModel.cardContent.cardValue) {
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
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Cards.prototype, "cardmodels", void 0);
    Cards = __decorate([
        core_1.Component({
            selector: 'cards',
            template: "\t\t\t\t\t  \n\t\t\t\t<table>\n\t\t\t\t\t<tr *ngFor=\"let cardmodelItem of cardmodels; trackBy : index\">\n\t\t\t\t\t\t<td *ngFor=\"let cardmodel of cardmodelItem; trackBy : index\">\n\t\t\t\t\t\t\t<card [cardmodel] = \"cardmodel\" (cardClicked) = \"cardClicked($event)\"> </card>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n  \t\t\t\t"
        }), 
        __metadata('design:paramtypes', [])
    ], Cards);
    return Cards;
}());
exports.Cards = Cards;
//# sourceMappingURL=cards.component.js.map