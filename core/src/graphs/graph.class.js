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
var Graph = (function (_super) {
    __extends(Graph, _super);
    function Graph(nodes) {
        var _this = _super.call(this) || this;
        _this.nodes = nodes;
        return _this;
    }
    Graph.prototype.hide = function () {
        this.nodes.forEach(function (node) { return node.hide(); });
    };
    Graph.prototype.setCurrentNodeIndex = function (index) {
        if (index === void 0) { index = 0; }
        this.setNodeAsCurrent(this.nodes[index]);
    };
    Graph.prototype.setNodeAsCurrent = function (node) {
        var _this = this;
        if (this._currentNode) {
            this._currentNode.disable();
        }
        this._currentNode = node;
        this.hide();
        node.display();
        node.enable(function (newNode) {
            // callback de changement de noeud
            _this.setNodeAsCurrent(newNode);
        });
    };
    return Graph;
}(event_dispatcher_class_1.EventDispatcher));
exports.Graph = Graph;
//# sourceMappingURL=graph.class.js.map