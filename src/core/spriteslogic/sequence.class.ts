/**
 * Created by Christophe on 01/02/2017.
 */
import {SpritesGroup} from "../display/sprites-group.class";
import {IState} from "../interfaces/IState.interface";
import {EventDispatcher} from "../common/event-dispatcher.class";
import {Events} from "../common/events.class";

export class Sequence extends EventDispatcher {
    
    static LOOP_TYPE_CIRCLE:string = "circle";
    static LOOP_TYPE_RESET:string = "reset";

    private _direction:number = 1;
    private _currentIndex:number = -1;

    constructor(
        public group:SpritesGroup,
        public loopType:string,
        public states:IState[] = []
    ) {
        super();
    }

    private _isIndexValid(index:number):boolean {
        return index >= 0 && index < this.states.length;
    }

    hide() {
        this.states.forEach(state => state.hide());
    }

    displayAtIndex(index:number):boolean {
        if (!this._isIndexValid(index)) return false;

        this.hide();

        this._currentIndex = index;
        this.states[index].display();

        this.dispatchEvent(Events.SEQUENCE_ENTER_STATE, this.states[index]);

        return true;
    }

    reverse() {
        this._direction *= -1;
    }

    displayNext() {
        let done = this.displayAtIndex(this._currentIndex + this._direction);

        if (!done && this.loopType === Sequence.LOOP_TYPE_CIRCLE) {
            this.reverse();
            done = this.displayNext();
        }

        return done;
    }

    displayPrevious() {
        let done = this.displayAtIndex(this._currentIndex - this._direction);

        if (!done && this.loopType === Sequence.LOOP_TYPE_CIRCLE) {
            this.reverse();
            done = this.displayPrevious();
        }

        return done;
    }

    reset() {
        if (this._currentIndex !== -1) {
            this.states[this._currentIndex].hide();
        }

        this._currentIndex = -1;
    }

    resetIndex() {
        this._currentIndex = -1;
    }
}