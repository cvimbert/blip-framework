/**
 * Created by Christophe on 08/03/2017.
 */
import {Dispatcher} from "./dispatcher.class";
    
export class StatusSubscription {
    
    constructor(
        public statusName:string,
        private _callback:Function,
        private _dispatcher:Dispatcher
    ) {}
    
    call(value:any) {
        this._callback(value);
    }
    
    unsubscribe() {
        this._dispatcher.deleteSubscription(this)
    }
}