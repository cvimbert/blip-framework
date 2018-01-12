/**
 * Created by Christophe on 03/02/2017.
 */
import {EventDispatcher} from "../common/event-dispatcher.class";
import {Events} from "../common/events.class";

export class Clock extends EventDispatcher {

    private _interval:number;

    constructor(
        public period:number
    ) {
        super();
    }

    start() {
        this.stop();

        this._interval = setInterval(() => {
            this.dispatchEvent(Events.CLOCK_PERIOD);
        }, this.period * 1000);
    }

    stop() {
        if (this._interval) {
            clearInterval(this._interval);
            this._interval = null;
        }
    }
}
