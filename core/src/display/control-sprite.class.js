"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var image_display_element_1 = require("./image-display-element");
var ControlSprite = (function (_super) {
    __extends(ControlSprite, _super);
    function ControlSprite(file, x, y, scale) {
        if (scale === void 0) { scale = 1; }
        return _super.call(this, file, x, y, scale) || this;
    }
    ControlSprite.prototype.getDOMElement = function () {
        var div = _super.prototype.getDOMElement.call(this);
        div.classList.add("control");
        return div;
    };
    Object.defineProperty(ControlSprite.prototype, "DOMElement", {
        get: function () {
            return this._DOMElement;
        },
        enumerable: true,
        configurable: true
    });
    return ControlSprite;
}(image_display_element_1.ImageDisplayElement));
exports.ControlSprite = ControlSprite;
//# sourceMappingURL=control-sprite.class.js.map