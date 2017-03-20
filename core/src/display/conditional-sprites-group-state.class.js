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
var ConditionalSpritesGroupState = (function (_super) {
    __extends(ConditionalSpritesGroupState, _super);
    function ConditionalSpritesGroupState(state, condition) {
        var _this = _super.call(this) || this;
        _this.state = state;
        _this.condition = condition;
        return _this;
    }
    return ConditionalSpritesGroupState;
}(event_dispatcher_class_1.EventDispatcher));
exports.ConditionalSpritesGroupState = ConditionalSpritesGroupState;
//# sourceMappingURL=conditional-sprites-group-state.class.js.map