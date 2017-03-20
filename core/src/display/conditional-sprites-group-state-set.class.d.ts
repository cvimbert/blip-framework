/**
 * Created by Christophe on 14/02/2017.
 */
import { EventDispatcher } from "../common/event-dispatcher.class";
import { SpritesGroup } from "./sprites-group.class";
import { IDisplayable } from "../interfaces/IDisplayable.interface";
import { ConditionalSpritesGroupState } from "./conditional-sprites-group-state.class";
export declare class ConditionalSpritesGroupStateSet extends EventDispatcher {
    group: SpritesGroup;
    conditionalStates: ConditionalSpritesGroupState[];
    defaultState: IDisplayable;
    constructor(group: SpritesGroup, conditionalStates: ConditionalSpritesGroupState[], defaultState: IDisplayable);
    display(): void;
    update(): void;
    hide(): void;
}
