/**
 * Created by Christophe on 08/03/2017.
 */
import { StatusDispatcher } from "./status-dispatcher.class";
export declare class StatusSubscription {
    statusName: string;
    private _callback;
    private _dispatcher;
    constructor(statusName: string, _callback: Function, _dispatcher: StatusDispatcher);
    call(value: any): void;
    unsubscribe(): void;
}
