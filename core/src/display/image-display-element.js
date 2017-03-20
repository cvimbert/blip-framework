"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by Christophe on 22/02/2017.
 */
var display_element_class_1 = require("./display-element.class");
var ImageDisplayElement = (function (_super) {
    __extends(ImageDisplayElement, _super);
    function ImageDisplayElement(file, x, y, scale) {
        if (scale === void 0) { scale = 1; }
        var _this = _super.call(this, x, y, scale) || this;
        _this.file = file;
        return _this;
    }
    ImageDisplayElement.prototype.getDOMElement = function () {
        var div = _super.prototype.getDOMElement.call(this);
        var image = document.createElement("img");
        image["src"] = this.file.path;
        div.appendChild(image);
        return div;
    };
    return ImageDisplayElement;
}(display_element_class_1.DisplayElement));
exports.ImageDisplayElement = ImageDisplayElement;
//# sourceMappingURL=image-display-element.js.map