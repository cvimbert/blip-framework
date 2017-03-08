/**
 * Created by Christophe on 08/03/2017.
 */
import {StatusDispatcher} from "./status-dispatcher.class";
    
export class StatusSubscription {
    
    constructor(
        public statusName:string,
        private _callback:Function,
        private _dispatcher:StatusDispatcher
    ) {}
    
    call(value:any) {
        this._callback(value);
    }
    
    unsubscribe() {
        
    }
}