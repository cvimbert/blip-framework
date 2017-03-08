/**
 * Created by Christophe on 08/03/2017.
 */
import {StatusSubscription} from "./status-subscription.class";

export class StatusDispatcher {

    private _subscriptions:StatusSubscription[] = [];
    private _statusValues:{[key:string]:any} = {};

    setStatus(statusName:string, value:any) {
        this._statusValues[statusName] = value;

        this._subscriptions.forEach((subscription:StatusSubscription) => {
            if (subscription.statusName === statusName) {
                subscription.call(value);
            }
        });
    }

    subscribe(statusName:string, callback:Function):StatusSubscription {
        var subscription:StatusSubscription = new StatusSubscription(statusName, callback, this);

        if (this._statusValues[statusName]) {
            subscription.call(this._statusValues[statusName]);
        }

        this._subscriptions.push(subscription);
        return subscription;
    }
    
    deleteSubscription(subscription:StatusSubscription) {
        var index:number = this._subscriptions.indexOf(subscription);

        if (index !== -1) {
            this._subscriptions.splice(index, 1);
        }
    }
}