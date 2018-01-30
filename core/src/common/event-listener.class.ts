/**
 * Created by Christophe on 03/03/2017.
 */
import {EventDispatcher} from "./event-dispatcher.class";

export class EventListener {

    constructor(
        public  eventName:string,
        private _callback:Function,
        private _dispatcher:EventDispatcher
    ) {}

    call(param) {
        if (this._callback) {
            this._callback(param);
        }
    }

    stoplisten() {
        this._dispatcher.deleteListener(this);
    }
}