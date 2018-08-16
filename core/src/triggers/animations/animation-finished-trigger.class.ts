import {BaseTrigger} from "../base-trigger.class";
import {IState} from "../../interfaces/IState.interface";
import {Animation, EventListener, Events} from "../../../";

export class AnimationFinishedTrigger extends BaseTrigger {

    private listener: EventListener;

    constructor(
        private animation: Animation
    ) {
        super();
    }

    enable() {
        this.animation.listen(Events.ANIMATION_END, () => {
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