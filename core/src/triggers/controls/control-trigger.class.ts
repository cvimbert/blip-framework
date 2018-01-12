/**
 * Created by Christophe on 10/01/2018.
 */
import {BaseTrigger} from "../base-trigger.class";
import {ITrigger} from "../../interfaces/ITrigger.interface";
import {Control} from "../../gamelogic/control.class";
import {EventListener} from "../../common/event-listener.class";

export class ControlTrigger extends BaseTrigger implements ITrigger {

    private _listener:EventListener;

    constructor(
        public control:Control,
        public eventName:string,
        callback:Function = null
    ) {
        super(callback);
    }

    enable() {
        this._listener = this.control.listen(this.eventName, this.callback);
    }

    disable() {
        this.control.deleteListener(this._listener);
    }
}