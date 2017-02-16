/**
 * Created by Christophe on 03/02/2017.
 */
import {Sequence} from "./sequence.class";
import {EventDispatcher} from "../common/event-dispatcher.class";
import {Events} from "../common/events.class";

export class Animation extends EventDispatcher {

    private _isPlaying:boolean = false;
    private _animationInterval:number;


    constructor(
        public sequence:Sequence,
        public iterations:number,
        public period:number,
        public interruptable:boolean = true
    ) {
        super();
    }

    play() {
        if (this.interruptable === false && this._isPlaying) {
            occurencesCounter = 0;
            return;
        }

        this.sequence.reset();
        this.sequence.displayNext();

        var occurencesCounter = 0;

        this._isPlaying = true;

        this._animationInterval = setInterval(() => {

            console.log("loop");

            if (this._isPlaying === false) return;

            if (!this.sequence.displayNext()) {
                this.dispatchEvent(Events.ANIMATION_ITERATION_END, occurencesCounter);
                occurencesCounter++;

                console.log("--> " + occurencesCounter + " " + this.iterations);
                if (occurencesCounter >= this.iterations) {

                    clearInterval(this._animationInterval);

                    this.dispatchEvent(Events.ANIMATION_END);
                    this._isPlaying = false;
                }
                else {
                    // on repart à zéro
                    this.sequence.resetIndex();
                    this.sequence.displayNext();
                }
            }

        }, this.period * 1000);
    }

    stop() {

    }

    reset() {
        this.sequence.reset();

        if (this._animationInterval !== undefined) {
            clearInterval(this._animationInterval);
            this._animationInterval = undefined;
        }
    }
}