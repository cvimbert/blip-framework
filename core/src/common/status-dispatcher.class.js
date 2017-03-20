"use strict";
/**
 * Created by Christophe on 08/03/2017.
 */
var status_subscription_class_1 = require("./status-subscription.class");
var StatusDispatcher = (function () {
    function StatusDispatcher() {
        this._subscriptions = [];
        this._statusValues = {};
    }
    StatusDispatcher.prototype.setStatus = function (statusName, value) {
        var _this = this;
        this._subscriptions.forEach(function (subscription) {
            if (subscription.statusName === statusName && value != _this._statusValues[statusName]) {
                subscription.call(value);
            }
        });
        this._statusValues[statusName] = value;
    };
    StatusDispatcher.prototype.subscribe = function (statusName, callback) {
        var subscription = new status_subscription_class_1.StatusSubscription(statusName, callback, this);
        if (this._statusValues[statusName]) {
            subscription.call(this._statusValues[statusName]);
        }
        this._subscriptions.push(subscription);
        return subscription;
    };
    StatusDispatcher.prototype.deleteSubscription = function (subscription) {
        var index = this._subscriptions.indexOf(subscription);
        if (index !== -1) {
            this._subscriptions.splice(index, 1);
        }
    };
    return StatusDispatcher;
}());
exports.StatusDispatcher = StatusDispatcher;
//# sourceMappingURL=status-dispatcher.class.js.map