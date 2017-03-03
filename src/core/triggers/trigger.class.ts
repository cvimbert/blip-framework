/**
 * Created by Christophe on 27/02/2017.
 */
import {EventDispatcher} from "../common/event-dispatcher.class";
import {EventSubscription} from "../common/event-subscription.class";

export class Trigger {
    
    enabled:boolean = true;
    subscription:EventSubscription;

    constructor(
        public dispatcher:EventDispatcher,
        public eventName:string,
        public callback:Function,
        public argument:any = null
    ) {}

    private _callback(arg:any) {
        
        if (!this.enabled) return;
        
        if (this.argument) {
            if (arg !== this.argument) {
                return;
            }
        }

        this.callback();
    }

    enable() {
        this.subscription = this.dispatcher.subscribe(this.eventName, (arg:any) => this._callback(arg));
    }

    disable() {
        this.subscription.unsubscribe();
    }
}