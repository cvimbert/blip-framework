"use strict";
/**
 * Created by Christophe on 07/03/2017.
 */
var BaseTrigger = (function () {
    function BaseTrigger(callback) {
        if (callback === void 0) { callback = null; }
        this.callback = callback;
        this._enabled = false;
    }
    Object.defineProperty(BaseTrigger.prototype, "enabled", {
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
    BaseTrigger.prototype.enable = function () {
        this._enabled = true;
    };
    BaseTrigger.prototype.disable = function () {
        this._enabled = false;
    };
    BaseTrigger.prototype.bind = function (callback) {
        this.callback = callback;
        this._enabled = true;
    };
    BaseTrigger.prototype.unbind = function () {
        this.callback = null;
        this._enabled = false;
    };
    return BaseTrigger;
}());
exports.BaseTrigger = BaseTrigger;
//# sourceMappingURL=base-trigger.class.js.map