/**
 * Created by Christophe on 01/02/2017.
 */
import {EventListener} from "./event-listener.class";

export class EventDispatcher {

    private _listeners:EventListener[] = [];

    dispatchEvent(eventType:string, param:any = null) {
        this._listeners.forEach((subscription:EventListener) => {
            if (subscription.eventName === eventType) {
                subscription.call(param);
            }
        });
    }

    listen(eventName:string, callback:Function):EventListener {
        var listener:EventListener = new EventListener(eventName, callback, this);
        this._listeners.push(listener);
        return listener;
    }

    deleteListener(listener:EventListener) {
        var index:number = this._listeners.indexOf(listener);

        if (index !== -1) {
            this._listeners.splice(index, 1);
        }
    }
}