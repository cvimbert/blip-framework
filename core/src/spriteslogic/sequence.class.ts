/**
 * Created by Christophe on 01/02/2017.
 */
import {SpritesGroup} from "../display/sprites-group.class";
import {IDisplayable} from "../interfaces/IDisplayable.interface";
import {Dispatcher} from "../common/dispatcher.class";
import {Events} from "../common/events.class";
import {ExtendedSpritesGroup} from "../display/extended-sprites-group.class";

export class Sequence extends Dispatcher {

    // 1 2 3 4 3 2 1 2 3 4
    static LOOP_TYPE_CIRCLE:string = "circle";

    // 1 2 3 4 1 2 3 4 1 2 3 4
    static LOOP_TYPE_RESET:string = "reset";

    private _direction:number = 1;
    private _currentIndex:number = -1;

    constructor(
        public group:SpritesGroup|ExtendedSpritesGroup,
        public states:IDisplayable[] = [],
        public loopType:string = ""
    ) {
        super();
    }

    private _isIndexValid(index:number):boolean {
        return index >= 0 && index < this.states.length;
    }

    hide() {
        this.states.forEach(state => state.hide());
    }

    displayAtIndex(index:number, forced:boolean = false):boolean {
        //if (!this._isIndexValid(index)) return false;

        if (!forced && (index <= -1 || index >= this.states.length)){
            return false;
        }

        if (index <= -1) {

            if (this.loopType === Sequence.LOOP_TYPE_CIRCLE) {
                this.reverse();
                this.displayAtIndex(1);
            } else if (this.loopType === Sequence.LOOP_TYPE_RESET) {
                this.displayAtIndex(this.states.length - 1);
            }

            return false;

        } else if (index >= this.states.length) {

            if (this.loopType === Sequence.LOOP_TYPE_CIRCLE) {
                this.reverse();
                this.displayAtIndex(this.states.length - 2);
            } else if (this.loopType === Sequence.LOOP_TYPE_RESET) {
                this.displayAtIndex(0);
            }

            return false;
        }

        this.hide();

        this._currentIndex = index;
        this.states[index].display();

        this.dispatchEvent(Events.SEQUENCE_ENTER_STATE, this.states[index]);

        return true;
    }

    reverse() {
        this._direction *= -1;
    }

    /*inverse() {
        if (this._currentIndex === -1) {
            this._currentIndex = this.states.length;
        }
    }*/

    hasNext() {
        var nextIndex:number = this._currentIndex + this._direction;
        return !(nextIndex <= -1 || nextIndex >= this.states.length);
    }

    displayNext(forced:boolean = false) {
        let done = this.displayAtIndex(this._currentIndex + this._direction, forced);

        /*if (!done && this.loopType === Sequence.LOOP_TYPE_CIRCLE) {
            this.reverse();
        }*/

        return done;
    }

    hasPrevious() {
        var previousIndex:number = this._currentIndex - this._direction;
        return !(previousIndex <= -1 || previousIndex >= this.states.length);
    }

    displayPrevious(forced:boolean = false) {
        let done = this.displayAtIndex(this._currentIndex - this._direction, forced);

        /*if (!done && this.loopType === Sequence.LOOP_TYPE_CIRCLE) {
            this.reverse();
        }*/

        if (!done && this.loopType === Sequence.LOOP_TYPE_RESET) {
            this.resetIndex();
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