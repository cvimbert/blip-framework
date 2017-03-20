/**
 * Created by Christophe on 03/02/2017.
 */
import { EventDispatcher } from "../common/event-dispatcher.class";
export declare class Clock extends EventDispatcher {
    period: number;
    private _interval;
    constructor(period: number);
    start(): void;
    stop(): void;
}
