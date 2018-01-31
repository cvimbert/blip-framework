/**
 * Created by Christophe on 08/03/2017.
 */
import {StatusSubscription} from "./status-subscription.class";

export class StatusDispatcher {

    private subscriptions:StatusSubscription[] = [];
    private statusValues:{[key:string]:any} = {};

    setStatus(statusName:string, value:any) {
        this.subscriptions.forEach((subscription:StatusSubscription) => {
            if (subscription.statusName === statusName && value != this.statusValues[statusName]) {
                subscription.call(value);
            }
        });

        this.statusValues[statusName] = value;
    }

    subscribe(statusName:string, callback:Function):StatusSubscription {
        let subscription:StatusSubscription = new StatusSubscription(statusName, callback, this);

        if (this.statusValues[statusName]) {
            subscription.call(this.statusValues[statusName]);
        }

        this.subscriptions.push(subscription);
        return subscription;
    }
    
    deleteSubscription(subscription:StatusSubscription) {
        let index:number = this.subscriptions.indexOf(subscription);

        if (index !== -1) {
            this.subscriptions.splice(index, 1);
        }
    }
}