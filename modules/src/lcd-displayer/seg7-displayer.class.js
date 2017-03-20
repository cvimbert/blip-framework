"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by Christophe on 22/02/2017.
 */
var display_element_class_1 = require("../../core/display/display-element.class");
var events_class_1 = require("../../core/common/events.class");
var Seg7Displayer = (function (_super) {
    __extends(Seg7Displayer, _super);
    function Seg7Displayer(x, y, scale, variable) {
        if (scale === void 0) { scale = 1; }
        if (variable === void 0) { variable = null; }
        var _this = _super.call(this, x, y, scale) || this;
        _this.variable = variable;
        _this._currentValue = null;
        if (variable)
            _this.bindVariable(variable);
        return _this;
    }
    Seg7Displayer.prototype.getDOMElement = function () {
        if (this._DOMElement) {
            return this._DOMElement;
        }
        else {
            var div = _super.prototype.getDOMElement.call(this);
            this.txtDiv = document.createElement("div");
            div.appendChild(this.txtDiv);
            div.classList.add("seg7-displayer");
            if (this.value) {
                this.value = this._currentValue;
            }
            return div;
        }
    };
    Seg7Displayer.prototype.bindVariable = function (variable) {
        var _this = this;
        this.variable = variable;
        if (variable.value !== null)
            this.value = +variable.value;
        variable.listen(events_class_1.Events.VARIABLE_CHANGE, function (value) { return _this.value = +value; });
    };
    Object.defineProperty(Seg7Displayer.prototype, "value", {
        get: function () {
            return this._currentValue;
        },
        set: function (value) {
            if (this.txtDiv)
                this.txtDiv.innerHTML = String(value);
            this._currentValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Seg7Displayer.prototype.clear = function () {
        this.txtDiv.innerHTML = " ";
        this._currentValue = null;
    };
    return Seg7Displayer;
}(display_element_class_1.DisplayElement));
exports.Seg7Displayer = Seg7Displayer;
//# sourceMappingURL=seg7-displayer.class.js.map