import {BaseTrigger} from "../base-trigger.class";
import {EventListener, Events, ITrigger, Sequence} from "../../../";

export class SequenceEndTrigger extends BaseTrigger implements ITrigger {

    listener: EventListener;

    constructor(
        private sequence: Sequence
    ) {
        super();
    }

    enable() {
        this.sequence.listen(Events.SEQUENCE_ENDING, () => {
            this.action();
        });
    }

    disable() {
        if (this.listener) {
            this.listener.stoplisten();
            this.listener = null;
        }
    }
}