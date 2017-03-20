"use strict";
var SpritesGroupState = (function () {
    function SpritesGroupState(group, sprites) {
        if (sprites === void 0) { sprites = []; }
        this.group = group;
        this.sprites = sprites;
    }
    SpritesGroupState.prototype.display = function () {
        this.group.hide();
        this.sprites.forEach(function (sprite) { return sprite.show(); });
    };
    SpritesGroupState.prototype.hide = function () {
        this.group.hide();
    };
    return SpritesGroupState;
}());
exports.SpritesGroupState = SpritesGroupState;
//# sourceMappingURL=sprites-group-state.class.js.map