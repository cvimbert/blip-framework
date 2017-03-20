"use strict";
/**
 * Created by Christophe on 01/02/2017.
 */
var event_listener_class_1 = require("./event-listener.class");
var EventDispatcher = (function () {
    function EventDispatcher() {
        this._listeners = [];
    }
    EventDispatcher.prototype.dispatchEvent = function (eventType, param) {
        if (param === void 0) { param = null; }
        this._listeners.forEach(function (subscription) {
            if (subscription.eventName === eventType) {
                subscription.call(param);
            }
        });
    };
    EventDispatcher.prototype.listen = function (eventName, callback) {
        var listener = new event_listener_class_1.EventListener(eventName, callback, this);
        this._listeners.push(listener);
        return listener;
    };
    EventDispatcher.prototype.deleteListener = function (listener) {
        var index = this._listeners.indexOf(listener);
        if (index !== -1) {
            this._listeners.splice(index, 1);
        }
    };
    return EventDispatcher;
}());
exports.EventDispatcher = EventDispatcher;
//# sourceMappingURL=event-dispatcher.class.js.map