/**
 * Created by Christophe on 03/03/2017.
 */
import {File} from "../files/file.class";
import {Actionable} from "../script/interfaces/actionable.interface";

var context:AudioContext = new AudioContext();

export class Sound implements Actionable {

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
        let source = context.createBufferSource();
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

    executeAction(actionName: string, args: string[]) {
        switch (actionName) {
            case "play":
                this.play();
                break;
        }
    }
}