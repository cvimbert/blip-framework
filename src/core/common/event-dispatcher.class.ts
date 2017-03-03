/**
 * Created by Christophe on 01/02/2017.
 */
import {EventSubscription} from "./event-subscription.class";

export class EventDispatcher {

    private _subscriptions:EventSubscription[] = [];

    dispatchEvent(eventType:string, param:any = null) {
        this._subscriptions.forEach((subscription:EventSubscription) => {
            if (subscription.eventName === eventType) {
                subscription.call(param);
            }
        });
    }

    subscribe(eventName:string, callback:Function):EventSubscription {
        var subscription:EventSubscription = new EventSubscription(eventName, callback, this);
        this._subscriptions.push(subscription);
        return subscription;
    }

    deleteSubscription(subscription:EventSubscription) {
        var index:number = this._subscriptions.indexOf(subscription);

        if (index !== -1) {
            this._subscriptions.splice(index, 1);
        }
    }
}