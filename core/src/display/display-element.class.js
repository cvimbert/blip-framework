"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by Christophe on 21/02/2017.
 */
var status_dispatcher_class_1 = require("../common/status-dispatcher.class");
var DisplayElement = (function (_super) {
    __extends(DisplayElement, _super);
    function DisplayElement(x, y, scale) {
        if (scale === void 0) { scale = 1; }
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.scale = scale;
        return _this;
    }
    DisplayElement.prototype.getDOMElement = function () {
        if (this._DOMElement) {
            return this._DOMElement;
        }
        else {
            var div = document.createElement("div");
            div.className = "game-element";
            div.style.left = this.x + "px";
            div.style.top = this.y + "px";
            div.style.transform = "scale(" + this.scale + ")";
            this._DOMElement = div;
            return div;
        }
    };
    DisplayElement.prototype.displayInDOMElement = function (container) {
        this._DOMElement = this.getDOMElement();
        container.appendChild(this._DOMElement);
        return this._DOMElement;
    };
    return DisplayElement;
}(status_dispatcher_class_1.StatusDispatcher));
exports.DisplayElement = DisplayElement;
//# sourceMappingURL=display-element.class.js.map