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
    }
    Card.prototype.flipCard = function () {
        this.cardmodel.flipCard();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', CardModel)
    ], Card.prototype, "cardmodel", void 0);
    Card = __decorate([
        core_1.Component({
            selector: 'card',
            template: "\n  \t<div class=\"flip-container\" [class.flip] = \"cardmodel.isFlip\"  (click)=\"flipCard();\">\n\t\t<div class=\"flipper\">\n\t\t\t<div class=\"front\" [ngStyle]=\"{'background': 'url(' + cardmodel.frontContent + ') 0 0  no-repeat'}\">\n\t\t\t\t\n\t\t\t</div>\n\t\t\t<div class=\"back\" [ngStyle]=\"{'background': 'url(' + cardmodel.cardContent.cardContent + ') 0 0  no-repeat'}\">\n\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], Card);
    return Card;
}());
exports.Card = Card;
var CardModel = (function () {
    function CardModel(cardCon) {
        this.frontContent = 'app/images/frontImage.jpg';
        this.isFlip = false;
        this.cardContent = cardCon;
    }
    CardModel.prototype.flipCard = function () {
        if (!this.isFlip) {
            this.isFlip = !this.isFlip;
        }
    };
    return CardModel;
}());
exports.CardModel = CardModel;
var CardContent = (function () {
    function CardContent(cardCon, cardVal) {
        this.cardContent = cardCon;
        this.cardValue = cardVal;
    }
    return CardContent;
}());
exports.CardContent = CardContent;
var CardData = (function () {
    function CardData() {
        this.cardContents = new Array();
        this.fillCardData();
    }
    CardData.prototype.fillCardData = function () {
        this.cardContents.push(new CardContent('app/images/animals/bull.png', 1));
        this.cardContents.push(new CardContent('app/images/animals/butterfly.jpg', 2));
        this.cardContents.push(new CardContent('app/images/animals/cat.jpg', 3));
        this.cardContents.push(new CardContent('app/images/animals/dog.jpg', 4));
        this.cardContents.push(new CardContent('app/images/animals/earthworm.png', 5));
        this.cardContents.push(new CardContent('app/images/animals/larva.jpg', 6));
        this.cardContents.push(new CardContent('app/images/animals/lion.jpg', 7));
        this.cardContents.push(new CardContent('app/images/animals/monkey.jpg', 8));
        this.cardContents.push(new CardContent('app/images/animals/panda.jpg', 9));
        this.cardContents.push(new CardContent('app/images/animals/peacock.jpg', 10));
        this.cardContents.push(new CardContent('app/images/animals/penguin.png', 11));
        this.cardContents.push(new CardContent('app/images/animals/snail.jpg', 12));
        this.cardContents.push(new CardContent('app/images/animals/snake.png', 13));
        this.cardContents.push(new CardContent('app/images/animals/twitter.png', 14));
    };
    return CardData;
}());
exports.CardData = CardData;
//# sourceMappingURL=card.component.js.map