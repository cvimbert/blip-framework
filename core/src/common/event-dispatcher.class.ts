/**
 * Created by Christophe on 01/02/2017.
 */
import {EventListener} from "./event-listener.class";

export class EventDispatcher {

    private listeners:EventListener[] = [];

    dispatchEvent(eventType:string, param:any = null) {
        this.listeners.forEach((subscription:EventListener) => {
            if (subscription.eventName === eventType) {
                subscription.call(param);
            }
        });
    }

    listen(eventName:string, callback:Function):EventListener {
        let listener:EventListener = new EventListener(eventName, callback, this);
        this.listeners.push(listener);
        return listener;
    }

    deleteListener(listener:EventListener) {
        let index:number = this.listeners.indexOf(listener);

        if (index !== -1) {
            this.listeners.splice(index, 1);
        }
    }
}