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
var GraphLink = (function (_super) {
    __extends(GraphLink, _super);
    function GraphLink(destNode, trigger) {
        var _this = _super.call(this) || this;
        _this.destNode = destNode;
        _this.trigger = trigger;
        return _this;
    }
    GraphLink.prototype.enableTrigger = function (callback) {
        var _this = this;
        this.trigger.enable();
        this.trigger.bind(function () { return callback(_this.destNode); });
    };
    GraphLink.prototype.disableTrigger = function () {
        this.trigger.unbind();
    };
    return GraphLink;
}(event_dispatcher_class_1.EventDispatcher));
exports.GraphLink = GraphLink;
//# sourceMappingURL=graph-link.class.js.map