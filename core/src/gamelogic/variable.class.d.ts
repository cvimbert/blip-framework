import { EventDispatcher } from "../common/event-dispatcher.class";
/**
 * Created by Christophe on 03/02/2017.
 */
export declare class Variable extends EventDispatcher {
    type: string;
    initValue: any;
    private _currentValue;
    static STRING_TYPE: string;
    static NUMBER_TYPE: string;
    static BOOLEAN_TYPE: string;
    constructor(type: string, initValue?: any);
    value: any;
    getType(): string;
    increment(): void;
    decrement(): void;
    reset(newInitValue?: any): void;
}
