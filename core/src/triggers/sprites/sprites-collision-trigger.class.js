"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by Christophe on 08/03/2017.
 */
var base_trigger_class_1 = require("../base-trigger.class");
var events_class_1 = require("../../common/events.class");
var SpritesCollisionTrigger = (function (_super) {
    __extends(SpritesCollisionTrigger, _super);
    function SpritesCollisionTrigger(baseSprite, targetSprite, callback, onEvent, offEvent) {
        if (callback === void 0) { callback = null; }
        if (onEvent === void 0) { onEvent = events_class_1.Events.DISPLAYED; }
        if (offEvent === void 0) { offEvent = events_class_1.Events.HIDDEN; }
        var _this = _super.call(this, callback) || this;
        _this.baseSprite = baseSprite;
        _this.targetSprite = targetSprite;
        _this.onEvent = onEvent;
        _this.offEvent = offEvent;
        _this.ON = "on";
        _this.OFF = "off";
        return _this;
    }
    SpritesCollisionTrigger.prototype.enable = function () {
        if (!this._enabled) {
        }
        _super.prototype.enable.call(this);
    };
    SpritesCollisionTrigger.prototype.disable = function () {
        if (this._baseSpriteSubscription1)
            this._baseSpriteSubscription1.stoplisten();
        if (this._targetSpriteSubscription1)
            this._targetSpriteSubscription1.stoplisten();
        if (this._baseSpriteSubscription2)
            this._baseSpriteSubscription2.stoplisten();
        if (this._targetSpriteSubscription2)
            this._targetSpriteSubscription2.stoplisten();
        _super.prototype.disable.call(this);
    };
    return SpritesCollisionTrigger;
}(base_trigger_class_1.BaseTrigger));
exports.SpritesCollisionTrigger = SpritesCollisionTrigger;
//# sourceMappingURL=sprites-collision-trigger.class.js.map