import {EventListener} from "../common/event-listener.class";
/**
 * Created by Christophe on 07/03/2017.
 */

export class BaseTrigger {

    protected _enabled:boolean = false;

    constructor(
        public callback:Function = null
    ) {}

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