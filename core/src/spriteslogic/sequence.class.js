"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var event_dispatcher_class_1 = require("../common/event-dispatcher.class");
var events_class_1 = require("../common/events.class");
var Sequence = (function (_super) {
    __extends(Sequence, _super);
    function Sequence(group, states, loopType) {
        if (states === void 0) { states = []; }
        if (loopType === void 0) { loopType = ""; }
        var _this = _super.call(this) || this;
        _this.group = group;
        _this.states = states;
        _this.loopType = loopType;
        _this._direction = 1;
        _this._currentIndex = -1;
        return _this;
    }
    Sequence.prototype._isIndexValid = function (index) {
        return index >= 0 && index < this.states.length;
    };
    Sequence.prototype.hide = function () {
        this.states.forEach(function (state) { return state.hide(); });
    };
    Sequence.prototype.displayAtIndex = function (index, forced) {
        if (forced === void 0) { forced = false; }
        //if (!this._isIndexValid(index)) return false;
        console.log(index);
        if (!forced && (index <= -1 || index >= this.states.length)) {
            console.log("pas forcé");
            return false;
        }
        if (index <= -1) {
            console.log("min");
            if (this.loopType === Sequence.LOOP_TYPE_CIRCLE) {
                this.reverse();
                this.displayAtIndex(1);
            }
            else if (this.loopType === Sequence.LOOP_TYPE_RESET) {
                this.displayAtIndex(this.states.length - 1);
            }
            return false;
        }
        else if (index >= this.states.length) {
            console.log("max");
            if (this.loopType === Sequence.LOOP_TYPE_CIRCLE) {
                this.reverse();
                this.displayAtIndex(this.states.length - 2);
            }
            else if (this.loopType === Sequence.LOOP_TYPE_RESET) {
                this.displayAtIndex(0);
            }
            return false;
        }
        this.hide();
        this._currentIndex = index;
        this.states[index].display();
        this.dispatchEvent(events_class_1.Events.SEQUENCE_ENTER_STATE, this.states[index]);
        return true;
    };
    Sequence.prototype.reverse = function () {
        this._direction *= -1;
    };
    /*inverse() {
        if (this._currentIndex === -1) {
            this._currentIndex = this.states.length;
        }
    }*/
    Sequence.prototype.hasNext = function () {
        var nextIndex = this._currentIndex + this._direction;
        return !(nextIndex <= -1 || nextIndex >= this.states.length);
    };
    Sequence.prototype.displayNext = function (forced) {
        if (forced === void 0) { forced = false; }
        var done = this.displayAtIndex(this._currentIndex + this._direction, forced);
        /*if (!done && this.loopType === Sequence.LOOP_TYPE_CIRCLE) {
            this.reverse();
        }*/
        return done;
    };
    Sequence.prototype.hasPrevious = function () {
        var previousIndex = this._currentIndex - this._direction;
        return !(previousIndex <= -1 || previousIndex >= this.states.length);
    };
    Sequence.prototype.displayPrevious = function (forced) {
        if (forced === void 0) { forced = false; }
        var done = this.displayAtIndex(this._currentIndex - this._direction, forced);
        /*if (!done && this.loopType === Sequence.LOOP_TYPE_CIRCLE) {
            this.reverse();
        }*/
        if (!done && this.loopType === Sequence.LOOP_TYPE_RESET) {
            this.resetIndex();
        }
        return done;
    };
    Sequence.prototype.reset = function () {
        if (this._currentIndex !== -1) {
            this.states[this._currentIndex].hide();
        }
        this._currentIndex = -1;
    };
    Sequence.prototype.resetIndex = function () {
        this._currentIndex = -1;
    };
    return Sequence;
}(event_dispatcher_class_1.EventDispatcher));
// 1 2 3 4 3 2 1 2 3 4
Sequence.LOOP_TYPE_CIRCLE = "circle";
// 1 2 3 4 1 2 3 4 1 2 3 4
Sequence.LOOP_TYPE_RESET = "reset";
exports.Sequence = Sequence;
//# sourceMappingURL=sequence.class.js.map