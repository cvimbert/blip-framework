/**
 * Created by Christophe on 27/02/2017.
 */
import { EventDispatcher } from "../common/event-dispatcher.class";
import { EventListener } from "../common/event-listener.class";
import { ITrigger } from "../interfaces/ITrigger.interface";
import { BaseTrigger } from "./base-trigger.class";
export declare class Trigger extends BaseTrigger implements ITrigger {
    dispatcher: EventDispatcher;
    eventName: string;
    argument: any;
    subscription: EventListener;
    constructor(dispatcher: EventDispatcher, eventName: string, callback?: Function, argument?: any);
    protected _callback(arg: any): void;
    enabled: boolean;
    enable(): void;
    disable(): void;
}
