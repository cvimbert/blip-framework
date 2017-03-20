/**
 * Created by Christophe on 07/03/2017.
 */
export declare class BaseTrigger {
    callback: Function;
    protected _enabled: boolean;
    constructor(callback?: Function);
    enabled: boolean;
    enable(): void;
    disable(): void;
    bind(callback: Function): void;
    unbind(): void;
}
