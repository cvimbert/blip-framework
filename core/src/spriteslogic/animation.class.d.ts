/**
 * Created by Christophe on 03/02/2017.
 */
import { Sequence } from "./sequence.class";
import { EventDispatcher } from "../common/event-dispatcher.class";
export declare class Animation extends EventDispatcher {
    sequence: Sequence;
    iterations: number;
    period: number;
    interruptable: boolean;
    private _isPlaying;
    private _animationInterval;
    constructor(sequence: Sequence, iterations: number, period: number, interruptable?: boolean);
    play(): void;
    stop(): void;
    reset(): void;
}
