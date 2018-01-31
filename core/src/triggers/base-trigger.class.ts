/**
 * Created by Christophe on 07/03/2017.
 */
import {Dispatcher} from "../common/dispatcher.class";
import {Events} from "../common/events.class";

export class BaseTrigger extends Dispatcher {

    protected _enabled:boolean = false;

    constructor() {
        super();
    }

    action(arg:any = null) {
        this.dispatchEvent(Events.TRIGGER_ACTION, arg);
    }

    set enabled(value:boolean) {
        if (value) {
            this.enable();
        } else {
            this.disable();
        }
    }

    enable() {
        this._enabled = true;
    }

    disable() {
        this._enabled = false;
    }

    get enabled():boolean {
        return this._enabled;
    }
}