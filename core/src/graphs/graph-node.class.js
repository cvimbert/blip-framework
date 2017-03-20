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
var GraphNode = (function (_super) {
    __extends(GraphNode, _super);
    function GraphNode(state, links) {
        if (links === void 0) { links = []; }
        var _this = _super.call(this) || this;
        _this.state = state;
        _this.links = links;
        return _this;
    }
    GraphNode.prototype.addLink = function (link) {
        this.links.push(link);
    };
    GraphNode.prototype.display = function () {
        this.state.display();
    };
    GraphNode.prototype.hide = function () {
        this.state.hide();
    };
    GraphNode.prototype.enable = function (callback) {
        this.links.forEach(function (link) { return link.enableTrigger(callback); });
    };
    GraphNode.prototype.disable = function () {
        this.links.forEach(function (link) { return link.disableTrigger(); });
    };
    return GraphNode;
}(event_dispatcher_class_1.EventDispatcher));
exports.GraphNode = GraphNode;
//# sourceMappingURL=graph-node.class.js.map