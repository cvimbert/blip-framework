"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_trigger_class_1 = require("./base-trigger.class");
var TimeTrigger = (function (_super) {
    __extends(TimeTrigger, _super);
    function TimeTrigger(time, callback) {
        if (callback === void 0) { callback = null; }
        var _this = _super.call(this, callback) || this;
        _this.time = time;
        return _this;
    }
    TimeTrigger.prototype.enable = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.callback)
                _this.callback();
        }, this.time * 1000);
    };
    return TimeTrigger;
}(base_trigger_class_1.BaseTrigger));
exports.TimeTrigger = TimeTrigger;
//# sourceMappingURL=time-trigger.class.js.map