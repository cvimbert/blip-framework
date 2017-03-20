"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var image_display_element_1 = require("./image-display-element");
var status_class_1 = require("../common/status.class");
//import {BehaviorSubject} from "rxjs/Rx";
var Sprite = (function (_super) {
    __extends(Sprite, _super);
    function Sprite(file, x, y, scale, initVisibility) {
        if (scale === void 0) { scale = 1; }
        if (initVisibility === void 0) { initVisibility = false; }
        var _this = 
        //this.visibility = new BehaviorSubject<boolean>(initVisibility);
        _super.call(this, file, x, y, scale) || this;
        _this._visible = initVisibility;
        return _this;
    }
    Sprite.prototype.displayInDOMElement = function (container) {
        var elem = _super.prototype.displayInDOMElement.call(this, container);
        if (this._visible) {
            this.show();
        }
        else {
            this.hide();
        }
        return elem;
    };
    Sprite.prototype.show = function () {
        //this.visibility.next(true);
        /*if (this._DOMElement) {
            this._DOMElement.style.display = "block";
        }*/
        this.setStatus(status_class_1.Status.VISIBILITY, status_class_1.Status.VISIBLE);
        this._DOMElement.classList.remove("inactive");
        this._DOMElement.classList.add("active");
        this._visible = true;
    };
    Sprite.prototype.display = function () {
        this.show();
    };
    Sprite.prototype.hide = function () {
        //this.visibility.next(false);
        this.setStatus(status_class_1.Status.VISIBILITY, status_class_1.Status.HIDDEN);
        this._DOMElement.classList.add("inactive");
        this._DOMElement.classList.remove("active");
        this._visible = false;
    };
    Sprite.prototype.toggle = function () {
        if (this._visible) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    return Sprite;
}(image_display_element_1.ImageDisplayElement));
exports.Sprite = Sprite;
//# sourceMappingURL=sprite.class.js.map