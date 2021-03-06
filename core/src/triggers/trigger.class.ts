/**
 * Created by Christophe on 27/02/2017.
 */
import {Dispatcher} from "../common/dispatcher.class";
import {EventListener} from "../common/event-listener.class";
import {ITrigger} from "../interfaces/ITrigger.interface";
import {BaseTrigger} from "./base-trigger.class";

export class Trigger extends BaseTrigger implements ITrigger {

    subscription:EventListener;

    constructor(
        public dispatcher:Dispatcher,
        public eventName:string,
        public argument:any = null
    ) {
        super();
    }

    protected _callback(arg:any) {
        
        /*if (!this._enabled || !this.callback) return;
        
        if (this.argument) {
            if (arg !== this.argument) {
                return;
            }
        }

        this.callback(arg);*/
    }

    set enabled(value:boolean) {
        if (value) {
            this.enable();
        } else {
            this.disable();
        }
    }
    
    get enabled():boolean {
        return this._enabled;
    }

    enable() {
        if (!this._enabled) {
            this.subscription = this.dispatcher.listen(this.eventName, (arg:any) => {
                this.action(arg);
            });
        }

        this._enabled = true;
    }

    disable() {
        if (this._enabled) {
            this.subscription.stoplisten();
        }

        this._enabled = false;
    }
}