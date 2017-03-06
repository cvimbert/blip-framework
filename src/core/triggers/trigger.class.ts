/**
 * Created by Christophe on 27/02/2017.
 */
import {EventDispatcher} from "../common/event-dispatcher.class";
import {EventSubscription} from "../common/event-subscription.class";

export class Trigger {
    
    _enabled:boolean = true;
    subscription:EventSubscription;

    constructor(
        public dispatcher:EventDispatcher,
        public eventName:string,
        public callback:Function,
        public argument:any = null
    ) {}

    private _callback(arg:any) {
        
        if (!this._enabled) return;
        
        if (this.argument) {
            if (arg !== this.argument) {
                return;
            }
        }

        this.callback(arg);
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
            this.subscription = this.dispatcher.subscribe(this.eventName, (arg:any) => this._callback(arg));
        }

        this._enabled = true;
    }

    disable() {
        if (this._enabled) {
            this.subscription.unsubscribe();
        }

        this._enabled = false;
    }
}