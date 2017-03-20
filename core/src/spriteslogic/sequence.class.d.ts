/**
 * Created by Christophe on 01/02/2017.
 */
import { SpritesGroup } from "../display/sprites-group.class";
import { IDisplayable } from "../interfaces/IDisplayable.interface";
import { EventDispatcher } from "../common/event-dispatcher.class";
export declare class Sequence extends EventDispatcher {
    group: SpritesGroup;
    states: IDisplayable[];
    loopType: string;
    static LOOP_TYPE_CIRCLE: string;
    static LOOP_TYPE_RESET: string;
    private _direction;
    private _currentIndex;
    constructor(group: SpritesGroup, states?: IDisplayable[], loopType?: string);
    private _isIndexValid(index);
    hide(): void;
    displayAtIndex(index: number, forced?: boolean): boolean;
    reverse(): void;
    hasNext(): boolean;
    displayNext(forced?: boolean): boolean;
    hasPrevious(): boolean;
    displayPrevious(forced?: boolean): boolean;
    reset(): void;
    resetIndex(): void;
}
