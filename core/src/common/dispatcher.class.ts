import {StatusSubscription} from "./status-subscription.class";
import {EventListener} from "./event-listener.class";

export class Dispatcher {

    // pour le status dispatcher
    private subscriptions:StatusSubscription[] = [];
    private statusValues:{[key:string]:any} = {};

    // pour l'event dispatcher
    private listeners:EventListener[] = [];


    // méthodes originales du status dispatcher
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


    // méthodes originales de l'event dispatcher
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