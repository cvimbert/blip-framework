import {Dispatcher} from "../common/dispatcher.class";
import {Events} from "../common/events.class";
/**
 * Created by Christophe on 03/02/2017.
 */

export class Variable extends Dispatcher {

    private _currentValue:any;

    static STRING_TYPE:string = "string";
    static NUMBER_TYPE:string = "number";
    static BOOLEAN_TYPE:string = "boolean";

    constructor(
        public type:string,
        public initValue:any = null
    ) {
        super();
        this._currentValue = initValue;
    }

    get value():any {
        return this._currentValue;
    }

    set value(value:any) {
        this._currentValue = value;
        this.dispatchEvent(Events.VARIABLE_CHANGE, this.value);
    }

    getType():string {
        return typeof this._currentValue;
    }

    increment() {
        if (this.type === Variable.NUMBER_TYPE) {
            this.value += 1;
        }
    }

    decrement() {
        if (this.type === Variable.NUMBER_TYPE) {
            this.value -= 1;
        }
    }

    reset(newInitValue:any = null) {

        if (newInitValue) {
            this.initValue = newInitValue;
        }

        this.value = this.initValue;
    }
}