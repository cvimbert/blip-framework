/**
 * Created by Christophe on 03/03/2017.
 */
import {File} from "../files/file.class";

//window["AudioContext"] = window["AudioContext"] || window["webkitAudioContext"];
var context = new AudioContext();

export class Sound {

    buffer:AudioBuffer;

    constructor(
        public file:File
    ) {
        this.load();
    }

    load() {
        var request = new XMLHttpRequest();
        request.open('GET', this.file.path, true);
        request.responseType = 'arraybuffer';

        request.onload = () => {
            context.decodeAudioData(request.response, (buffer:AudioBuffer) => {
                this.buffer = buffer;
                console.log(buffer);
            }, () => console.log("Sound loading failed"));
        };

        request.send();
    }

    play() {
        var source = context.createBufferSource();
        source.buffer = this.buffer;
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