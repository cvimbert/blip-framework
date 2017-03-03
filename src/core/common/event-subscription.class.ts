/**
 * Created by Christophe on 03/03/2017.
 */
import {EventDispatcher} from "./event-dispatcher.class";

export class EventSubscription {

    constructor(
        public  eventName:string,
        private _callback:Function,
        private _dispatcher:EventDispatcher
    ) {}

    call(param) {
        this._callback(param);
    }

    unsubscribe() {
        this._dispatcher.deleteSubscription(this);
    }
}