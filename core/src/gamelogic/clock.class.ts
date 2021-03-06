/**
 * Created by Christophe on 03/02/2017.
 */
import {Dispatcher} from "../common/dispatcher.class";
import {Events} from "../common/events.class";
import {Actionable} from "../script/interfaces/actionable.interface";
import {Triggerable} from "../interfaces/triggerable.interface";
import {BaseTrigger} from "../../";
import {ClockTickTrigger} from "../triggers/clocks/clock-tick-trigger.class";

export class Clock extends Dispatcher implements Actionable, Triggerable {

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

    getTrigger(name: string): BaseTrigger {
        switch (name) {
            case "tick":
                return new ClockTickTrigger(this);
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
