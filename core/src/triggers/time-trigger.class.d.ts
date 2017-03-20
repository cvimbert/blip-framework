/**
 * Created by Christophe on 07/03/2017.
 */
import { ITrigger } from "../interfaces/ITrigger.interface";
import { BaseTrigger } from "./base-trigger.class";
export declare class TimeTrigger extends BaseTrigger implements ITrigger {
    time: number;
    constructor(time: number, callback?: Function);
    enable(): void;
}
