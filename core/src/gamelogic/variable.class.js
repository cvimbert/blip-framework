"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var event_dispatcher_class_1 = require("../common/event-dispatcher.class");
var events_class_1 = require("../common/events.class");
/**
 * Created by Christophe on 03/02/2017.
 */
var Variable = (function (_super) {
    __extends(Variable, _super);
    function Variable(type, initValue) {
        if (initValue === void 0) { initValue = null; }
        var _this = _super.call(this) || this;
        _this.type = type;
        _this.initValue = initValue;
        _this._currentValue = initValue;
        return _this;
    }
    Object.defineProperty(Variable.prototype, "value", {
        get: function () {
            return this._currentValue;
        },
        set: function (value) {
            this._currentValue = value;
            this.dispatchEvent(events_class_1.Events.VARIABLE_CHANGE, this.value);
        },
        enumerable: true,
        configurable: true
    });
    Variable.prototype.getType = function () {
        return typeof this._currentValue;
    };
    Variable.prototype.increment = function () {
        if (this.type === Variable.NUMBER_TYPE) {
            this.value += 1;
        }
    };
    Variable.prototype.decrement = function () {
        if (this.type === Variable.NUMBER_TYPE) {
            this.value -= 1;
        }
    };
    Variable.prototype.reset = function (newInitValue) {
        if (newInitValue === void 0) { newInitValue = null; }
        if (newInitValue) {
            this.initValue = newInitValue;
        }
        this.value = this.initValue;
    };
    return Variable;
}(event_dispatcher_class_1.EventDispatcher));
Variable.STRING_TYPE = "string";
Variable.NUMBER_TYPE = "number";
Variable.BOOLEAN_TYPE = "boolean";
exports.Variable = Variable;
//# sourceMappingURL=variable.class.js.map