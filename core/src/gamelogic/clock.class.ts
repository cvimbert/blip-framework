/**
 * Created by Christophe on 03/02/2017.
 */
import {Dispatcher} from "../common/dispatcher.class";
import {Events} from "../common/events.class";
import {Actionable} from "../script/interfaces/actionable.interface";

export class Clock extends Dispatcher implements Actionable {

    private _interval:any;

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

    executeAction(actionName: string, args: string[]) {
        switch (actionName) {
            case "start":
                this.start();
                break;

            case "stop":
                this.stop();
                break;
        }
    }
}
