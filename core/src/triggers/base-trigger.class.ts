/**
 * Created by Christophe on 07/03/2017.
 */
import {EventDispatcher} from "../common/event-dispatcher.class";
import {Events} from "../common/events.class";

export class BaseTrigger extends EventDispatcher {

    protected _enabled:boolean = false;

    constructor(
        public callback:Function = null
    ) {
        super();
    }

    action() {
        this.dispatchEvent(Events.TRIGGER_ACTION);
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

    bind(callback:Function) {
        this.callback = callback;
        this._enabled = true;
    }

    unbind() {
        this.callback = null;
        this._enabled = false;
    }
}