/**
 * Created by Christophe on 08/03/2017.
 */
import { StatusSubscription } from "./status-subscription.class";
export declare class StatusDispatcher {
    private _subscriptions;
    private _statusValues;
    setStatus(statusName: string, value: any): void;
    subscribe(statusName: string, callback: Function): StatusSubscription;
    deleteSubscription(subscription: StatusSubscription): void;
}
