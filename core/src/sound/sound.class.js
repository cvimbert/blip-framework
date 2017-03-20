"use strict";
var context = new AudioContext();
var Sound = (function () {
    function Sound(file) {
        this.file = file;
        this.load();
    }
    Sound.prototype.load = function () {
        var _this = this;
        var request = new XMLHttpRequest();
        request.open('GET', this.file.path, true);
        request.responseType = 'arraybuffer';
        request.onload = function () {
            context.decodeAudioData(request.response, function (buffer) {
                _this._buffer = buffer;
            }, function () { return console.log("Sound loading failed"); });
        };
        request.send();
    };
    Sound.prototype.play = function () {
        var source = context.createBufferSource();
        source.buffer = this._buffer;
        source.connect(context.destination);
        source.start(0);
    };
    Sound.prototype.stop = function () {
        // useful ??
    };
    Sound.prototype.pause = function () {
        // useful ??
    };
    return Sound;
}());
exports.Sound = Sound;
//# sourceMappingURL=sound.class.js.map