"use strict";
var StatusSubscription = (function () {
    function StatusSubscription(statusName, _callback, _dispatcher) {
        this.statusName = statusName;
        this._callback = _callback;
        this._dispatcher = _dispatcher;
    }
    StatusSubscription.prototype.call = function (value) {
        this._callback(value);
    };
    StatusSubscription.prototype.unsubscribe = function () {
        this._dispatcher.deleteSubscription(this);
    };
    return StatusSubscription;
}());
exports.StatusSubscription = StatusSubscription;
//# sourceMappingURL=status-subscription.class.js.map