/**
 * Created by Christophe on 14/02/2017.
 */
import { EventDispatcher } from "../common/event-dispatcher.class";
import { ICondition } from "../interfaces/ICondition.interface";
import { IDisplayable } from "../interfaces/IDisplayable.interface";
export declare class ConditionalSpritesGroupState extends EventDispatcher {
    state: IDisplayable;
    condition: ICondition;
    constructor(state: IDisplayable, condition: ICondition);
}
