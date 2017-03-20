"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by Christophe on 14/02/2017.
 */
var event_dispatcher_class_1 = require("../common/event-dispatcher.class");
var ConditionalSpritesGroupStateSet = (function (_super) {
    __extends(ConditionalSpritesGroupStateSet, _super);
    function ConditionalSpritesGroupStateSet(group, conditionalStates, defaultState) {
        if (conditionalStates === void 0) { conditionalStates = []; }
        var _this = _super.call(this) || this;
        _this.group = group;
        _this.conditionalStates = conditionalStates;
        _this.defaultState = defaultState;
        return _this;
    }
    ConditionalSpritesGroupStateSet.prototype.display = function () {
        for (var _i = 0, _a = this.conditionalStates; _i < _a.length; _i++) {
            var conditionalState = _a[_i];
            if (conditionalState.condition.eval()) {
                conditionalState.state.display();
                return;
            }
        }
        this.defaultState.display();
    };
    ConditionalSpritesGroupStateSet.prototype.update = function () {
        this.display();
    };
    ConditionalSpritesGroupStateSet.prototype.hide = function () {
        this.group.hide();
    };
    return ConditionalSpritesGroupStateSet;
}(event_dispatcher_class_1.EventDispatcher));
exports.ConditionalSpritesGroupStateSet = ConditionalSpritesGroupStateSet;
//# sourceMappingURL=conditional-sprites-group-state-set.class.js.map