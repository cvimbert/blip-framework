/**
 * Created by Christophe on 01/02/2017.
 */
import { EventListener } from "./event-listener.class";
export declare class EventDispatcher {
    private _listeners;
    dispatchEvent(eventType: string, param?: any): void;
    listen(eventName: string, callback: Function): EventListener;
    deleteListener(listener: EventListener): void;
}
