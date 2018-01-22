/**
 * Created by Christophe on 07/03/2017.
 */
import {ITrigger} from "../interfaces/ITrigger.interface";
import {BaseTrigger} from "./base-trigger.class";

export class TimeTrigger extends BaseTrigger implements ITrigger {

    private timeout;

    constructor(
        public time:number,
        callback:Function = null
    ) {
        super(callback);
    }

    enable() {
        this.timeout = setTimeout(() => {
            if (this.callback) this.callback()
        }, this.time * 1000);
    }

    disable() {
        clearTimeout(this.timeout);
    }
}