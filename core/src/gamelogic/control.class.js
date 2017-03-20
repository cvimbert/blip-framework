"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var event_dispatcher_class_1 = require("../common/event-dispatcher.class");
var events_class_1 = require("../common/events.class");
var ControlZone = (function () {
    function ControlZone(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    return ControlZone;
}());
exports.ControlZone = ControlZone;
var Control = (function (_super) {
    __extends(Control, _super);
    function Control(sprite, zone) {
        if (zone === void 0) { zone = null; }
        var _this = _super.call(this) || this;
        _this.sprite = sprite;
        _this.zone = zone;
        var self = _this;
        _this.upHandler = function (evt) {
            self.checkZoneEvent(events_class_1.Events.CONTROL_UP, evt);
        };
        _this.downHandler = function (evt) {
            self.checkZoneEvent(events_class_1.Events.CONTROL_DOWN, evt);
        };
        return _this;
    }
    Control.prototype.setZone = function (x, y, width, height) {
        this.zone = new ControlZone(x, y, width, height);
    };
    Control.prototype.checkZoneEvent = function (eventName, event) {
        if (this.zone) {
            var x = event.offsetX;
            var y = event.offsetY;
            if (x >= this.zone.x
                &&
                    x <= this.zone.x + this.zone.width
                &&
                    y >= this.zone.y
                &&
                    y <= this.zone.y + this.zone.height) {
                this.dispatchEvent(eventName);
            }
        }
        else {
            this.dispatchEvent(eventName);
        }
    };
    Control.prototype._onMouseDown = function (evt) {
        this.checkZoneEvent(events_class_1.Events.CONTROL_DOWN, evt);
    };
    Control.prototype._onMouseUp = function (evt) {
        this.checkZoneEvent(events_class_1.Events.CONTROL_UP, evt);
    };
    Control.prototype.enable = function () {
        this.sprite.DOMElement.addEventListener("mousedown", this.downHandler);
        this.sprite.DOMElement.addEventListener("mouseup", this.upHandler);
    };
    Control.prototype.disable = function () {
        this.sprite.DOMElement.removeEventListener("mousedown", this.downHandler);
        this.sprite.DOMElement.removeEventListener("mouseup", this.upHandler);
    };
    return Control;
}(event_dispatcher_class_1.EventDispatcher));
exports.Control = Control;
//# sourceMappingURL=control.class.js.map