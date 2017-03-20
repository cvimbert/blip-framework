"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_trigger_class_1 = require("./base-trigger.class");
var Trigger = (function (_super) {
    __extends(Trigger, _super);
    function Trigger(dispatcher, eventName, callback, argument) {
        if (callback === void 0) { callback = null; }
        if (argument === void 0) { argument = null; }
        var _this = _super.call(this, callback) || this;
        _this.dispatcher = dispatcher;
        _this.eventName = eventName;
        _this.argument = argument;
        return _this;
    }
    Trigger.prototype._callback = function (arg) {
        if (!this._enabled || !this.callback)
            return;
        if (this.argument) {
            if (arg !== this.argument) {
                return;
            }
        }
        this.callback(arg);
    };
    Object.defineProperty(Trigger.prototype, "enabled", {
        get: function () {
            return this._enabled;
        },
        set: function (value) {
            if (value) {
                this.enable();
            }
            else {
                this.disable();
            }
        },
        enumerable: true,
        configurable: true
    });
    Trigger.prototype.enable = function () {
        var _this = this;
        if (!this._enabled) {
            this.subscription = this.dispatcher.listen(this.eventName, function (arg) {
                _this._callback(arg);
            });
        }
        this._enabled = true;
    };
    Trigger.prototype.disable = function () {
        if (this._enabled) {
            this.subscription.stoplisten();
        }
        this._enabled = false;
    };
    return Trigger;
}(base_trigger_class_1.BaseTrigger));
exports.Trigger = Trigger;
//# sourceMappingURL=trigger.class.js.map