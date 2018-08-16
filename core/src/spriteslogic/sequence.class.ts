/**
 * Created by Christophe on 01/02/2017.
 */
import {SpritesGroup} from "../display/sprites-group.class";
import {IDisplayable} from "../interfaces/IDisplayable.interface";
import {Dispatcher} from "../common/dispatcher.class";
import {Events} from "../common/events.class";
import {ExtendedSpritesGroup} from "../display/extended-sprites-group.class";
import {GameUnitObject} from "../global-objects/game-unit-object.class";
import {Actionable} from "../script/interfaces/actionable.interface";
import {Triggerable} from "../interfaces/triggerable.interface";
import {BaseTrigger} from "../../";
import {SequenceEndTrigger} from "../triggers/sequences/sequence-end-trigger.class";
import {Gettable} from "../interfaces/gettable.interface";

export class Sequence extends Dispatcher implements Actionable, Triggerable, Gettable {

    // 1 2 3 4 3 2 1 2 3 4
    static LOOP_TYPE_CIRCLE:string = "circle";

    // 1 2 3 4 1 2 3 4 1 2 3 4
    static LOOP_TYPE_RESET:string = "reset";

    private _direction:number = 1;
    private _currentIndex:number = -1;
    private _currentState: IDisplayable;

    constructor(
        public group:SpritesGroup|ExtendedSpritesGroup|GameUnitObject,
        public states:IDisplayable[] = [],
        public loopType:string = ""
    ) {
        super();
    }

    private _isIndexValid(index:number):boolean {
        return index >= 0 && index < this.states.length;
    }

    hide() {
        this.states.forEach(state =>  {
            state.hide();
        });
    }

    displayAtIndex(index:number, forced:boolean = false):boolean {

        if (!forced && (index <= -1 || index >= this.states.length)){

            if (index >= this.states.length) {
                this.dispatchEvent(Events.SEQUENCE_ENDING);
            }

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

        // this.hide();

        let newState: IDisplayable = this.states[index];

        if (this._currentState && newState !== this._currentState) {
            this._currentState.hide();
        }

        this._currentIndex = index;
        this._currentState = newState;
        this._currentState.display();

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
            this._currentState = null;
        }

        this._currentIndex = -1;
    }

    resetIndex() {
        this._currentIndex = -1;
    }

    executeAction(actionName: string, args: string[]) {

        switch (actionName) {
            case "next":
                this.displayNext();
                break;

            case "previous":
                this.displayPrevious();
                break;

            case "index":
                this.displayAtIndex(+args[0]);
                break;
        }
    }

    getTrigger(name: string): BaseTrigger {
        switch (name) {
            case "end":
                return new SequenceEndTrigger(this);
        }
    }

    getProperty(propertyName: string): any {
        switch (propertyName) {
            case "index":
                return this._currentIndex;
        }
    }
}