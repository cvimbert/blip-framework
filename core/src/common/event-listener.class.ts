/**
 * Created by Christophe on 03/03/2017.
 */
import {Dispatcher} from "./dispatcher.class";

export class EventListener {

    constructor(
        public  eventName:string,
        private callback:Function,
        private dispatcher:Dispatcher
    ) {}

    call(param) {
        if (this.callback) {
            this.callback(param);
        }
    }

    stoplisten() {
        this.dispatcher.deleteListener(this);
    }
}