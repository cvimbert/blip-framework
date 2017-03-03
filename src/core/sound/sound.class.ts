/**
 * Created by Christophe on 03/03/2017.
 */
import {File} from "../files/file.class";

var context:AudioContext = new AudioContext();

export class Sound {

    private _buffer:AudioBuffer;

    constructor(
        public file:File
    ) {
        this.load();
    }

    load() {
        var request:XMLHttpRequest = new XMLHttpRequest();
        request.open('GET', this.file.path, true);
        request.responseType = 'arraybuffer';

        request.onload = () => {
            context.decodeAudioData(request.response, (buffer:AudioBuffer) => {
                this._buffer = buffer;
            }, () => console.log("Sound loading failed"));
        };

        request.send();
    }

    play() {
        var source = context.createBufferSource();
        source.buffer = this._buffer;
        source.connect(context.destination);
        source.start(0);
    }

    stop() {
        // useful ??
    }

    pause() {
        // useful ??
    }
}