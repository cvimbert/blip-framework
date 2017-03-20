"use strict";
var SpritesGroup = (function () {
    function SpritesGroup(sprites) {
        this.sprites = sprites;
    }
    SpritesGroup.prototype.show = function () {
        this.sprites.forEach(function (sprite) { return sprite.show(); });
    };
    SpritesGroup.prototype.hide = function () {
        this.sprites.forEach(function (sprite) { return sprite.hide(); });
    };
    SpritesGroup.prototype.toggle = function () {
        this.sprites.forEach(function (sprite) { return sprite.toggle(); });
    };
    return SpritesGroup;
}());
exports.SpritesGroup = SpritesGroup;
//# sourceMappingURL=sprites-group.class.js.map