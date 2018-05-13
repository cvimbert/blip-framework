import {BaseTrigger} from "../base-trigger.class";
import {Clock, EventListener, Events, ITrigger} from "../../../";

export class ClockTickTrigger extends BaseTrigger implements ITrigger {

    private clockListener: EventListener;

    constructor(
        private clock: Clock
    ) {
        super();
    }

    enable() {
        this.clockListener = this.clock.listen(Events.CLOCK_PERIOD, () => {
            this.action();
        });
    }

    disable() {
        if (this.clockListener) {
            this.clockListener.stoplisten();
        }
    }
}