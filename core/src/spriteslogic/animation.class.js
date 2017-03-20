"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var event_dispatcher_class_1 = require("../common/event-dispatcher.class");
var events_class_1 = require("../common/events.class");
var Animation = (function (_super) {
    __extends(Animation, _super);
    function Animation(sequence, iterations, period, interruptable) {
        if (interruptable === void 0) { interruptable = true; }
        var _this = _super.call(this) || this;
        _this.sequence = sequence;
        _this.iterations = iterations;
        _this.period = period;
        _this.interruptable = interruptable;
        _this._isPlaying = false;
        return _this;
    }
    Animation.prototype.play = function () {
        var _this = this;
        if (this.interruptable === false && this._isPlaying) {
            occurencesCounter = 0;
            return;
        }
        this.sequence.reset();
        this.sequence.displayNext(true);
        var occurencesCounter = 0;
        this._isPlaying = true;
        this._animationInterval = setInterval(function () {
            if (_this._isPlaying === false)
                return;
            if (!_this.sequence.displayNext(occurencesCounter < _this.iterations - 1)) {
                _this.dispatchEvent(events_class_1.Events.ANIMATION_ITERATION_END, occurencesCounter);
                occurencesCounter++;
                if (occurencesCounter >= _this.iterations) {
                    clearInterval(_this._animationInterval);
                    _this.dispatchEvent(events_class_1.Events.ANIMATION_END);
                    _this._isPlaying = false;
                }
                else {
                }
            }
        }, this.period * 1000);
    };
    Animation.prototype.stop = function () {
    };
    Animation.prototype.reset = function () {
        this.sequence.reset();
        if (this._animationInterval !== undefined) {
            clearInterval(this._animationInterval);
            this._animationInterval = undefined;
        }
    };
    return Animation;
}(event_dispatcher_class_1.EventDispatcher));
exports.Animation = Animation;
//# sourceMappingURL=animation.class.js.map