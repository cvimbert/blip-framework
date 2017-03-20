"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by Christophe on 03/02/2017.
 */
var event_dispatcher_class_1 = require("../common/event-dispatcher.class");
var events_class_1 = require("../common/events.class");
var Clock = (function (_super) {
    __extends(Clock, _super);
    function Clock(period) {
        var _this = _super.call(this) || this;
        _this.period = period;
        return _this;
    }
    Clock.prototype.start = function () {
        var _this = this;
        this.stop();
        this._interval = setInterval(function () {
            _this.dispatchEvent(events_class_1.Events.CLOCK_PERIOD);
        }, this.period * 1000);
    };
    Clock.prototype.stop = function () {
        if (this._interval) {
            clearInterval(this._interval);
            this._interval = null;
        }
    };
    return Clock;
}(event_dispatcher_class_1.EventDispatcher));
exports.Clock = Clock;
//# sourceMappingURL=clock.class.js.map