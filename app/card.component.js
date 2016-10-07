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
var Card = (function () {
    function Card() {
        this.isFlip = false;
    }
    Card.prototype.flipCard = function () {
        //alert('flip the card');
        this.isFlip = !this.isFlip;
    };
    Card = __decorate([
        core_1.Component({
            selector: 'card',
            template: "\n  \t<div class=\"flip-container\" [class.flip] = \"isFlip\"  (click)=\"flipCard();\">\n\t\t<div class=\"flipper\">\n\t\t\t<div class=\"front\">\n\t\t\t\tfront content\n\t\t\t</div>\n\t\t\t<div class=\"back\">\n\t\t\t\tback content\n\t\t\t</div>\n\t\t</div>\n\t</div>\n  \t\t\t\t"
        }), 
        __metadata('design:paramtypes', [])
    ], Card);
    return Card;
}());
exports.Card = Card;
//# sourceMappingURL=card.component.js.map