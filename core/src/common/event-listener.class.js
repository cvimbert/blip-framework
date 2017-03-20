"use strict";
var EventListener = (function () {
    function EventListener(eventName, _callback, _dispatcher) {
        this.eventName = eventName;
        this._callback = _callback;
        this._dispatcher = _dispatcher;
    }
    EventListener.prototype.call = function (param) {
        this._callback(param);
    };
    EventListener.prototype.stoplisten = function () {
        this._dispatcher.deleteListener(this);
    };
    return EventListener;
}());
exports.EventListener = EventListener;
//# sourceMappingURL=event-listener.class.js.map