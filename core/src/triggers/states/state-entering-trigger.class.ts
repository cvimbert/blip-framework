import {BaseTrigger} from "../base-trigger.class";
import {EventListener, Events, ITrigger} from "../../../";
import {IState} from "../../interfaces/IState.interface";

export class StateEnteringTrigger extends BaseTrigger implements ITrigger {

    private listener: EventListener;

    constructor(
        private state: IState
    ) {
        super();
    }

    enable() {
        this.state.listen(Events.DISPLAYED, () => {
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