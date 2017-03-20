"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var seg7_displayer_class_1 = require("./seg7-displayer.class");
var display_element_class_1 = require("../../display/display-element.class");
var LcdDisplayer = (function (_super) {
    __extends(LcdDisplayer, _super);
    function LcdDisplayer(x, y, digitNumber, stepWidth, scale, variable) {
        if (digitNumber === void 0) { digitNumber = 1; }
        if (stepWidth === void 0) { stepWidth = 24; }
        if (scale === void 0) { scale = 1; }
        if (variable === void 0) { variable = null; }
        var _this = _super.call(this, x, y, scale) || this;
        _this.digitNumber = digitNumber;
        _this.stepWidth = stepWidth;
        _this.variable = variable;
        _this._backgroundDigits = [];
        _this._digits = [];
        _this._xPosition = 0;
        return _this;
    }
    Object.defineProperty(LcdDisplayer.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            var stringifiedValue = String(value);
            for (var index in this._digits) {
                if (this._digits.hasOwnProperty(index)) {
                    this._digits[index].value = +stringifiedValue[index];
                }
            }
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    LcdDisplayer.prototype.getDOMElement = function () {
        if (this._DOMElement) {
            return this._DOMElement;
        }
        else {
            var displayerDiv = _super.prototype.getDOMElement.call(this);
            displayerDiv.classList.add("lcd-displayer");
            for (var i = 0; i < this.digitNumber; i++) {
                var backgroundDigit = new seg7_displayer_class_1.Seg7Displayer(this._xPosition, 0);
                backgroundDigit.value = 8;
                var backgroundElem = backgroundDigit.displayInDOMElement(displayerDiv);
                backgroundElem.classList.add("inactive");
                this._backgroundDigits.push(backgroundDigit);
                var foregroundDigit = new seg7_displayer_class_1.Seg7Displayer(this._xPosition, 0);
                foregroundDigit.value = 4;
                foregroundDigit.displayInDOMElement(displayerDiv);
                this._digits.push(foregroundDigit);
                this._xPosition += this.stepWidth;
            }
            return displayerDiv;
        }
    };
    return LcdDisplayer;
}(display_element_class_1.DisplayElement));
exports.LcdDisplayer = LcdDisplayer;
//# sourceMappingURL=lcd-displayer.class.js.map