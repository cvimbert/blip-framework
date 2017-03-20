/**
 * Created by Christophe on 03/03/2017.
 */
import { EventDispatcher } from "./event-dispatcher.class";
export declare class EventListener {
    eventName: string;
    private _callback;
    private _dispatcher;
    constructor(eventName: string, _callback: Function, _dispatcher: EventDispatcher);
    call(param: any): void;
    stoplisten(): void;
}
