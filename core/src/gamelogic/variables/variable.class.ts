import {Dispatcher} from "../../common/dispatcher.class";
import {Events} from "../../common/events.class";
import {Actionable} from "../../script/interfaces/actionable.interface";
import {Gettable} from "../../interfaces/gettable.interface";
/**
 * Created by Christophe on 03/02/2017.
 */

export class Variable extends Dispatcher implements Actionable, Gettable {

    private currentValue:any;

    static STRING_TYPE:string = "string";
    static NUMBER_TYPE:string = "number";
    static BOOLEAN_TYPE:string = "boolean";

    constructor(
        public initValue:string|number|boolean = null
    ) {
        super();
        this.currentValue = initValue;
    }

    get value():any {
        return this.currentValue;
    }

    set value(value:any) {
        this.currentValue = value;
        this.dispatchEvent(Events.VARIABLE_CHANGE, this.value);
    }

    get type():string {
        return typeof this.value;
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

    executeAction(actionName: string, args: string[]) {
        switch (actionName) {
            case "set":
                if (this.type === Variable.BOOLEAN_TYPE) {
                    this.value = args[0] === "true";
                } else if (this.type === Variable.NUMBER_TYPE) {
                    this.value = +args[0];
                } else {
                    this.value = args[0];
                }
                break;

            case "reinit":
                this.reset();
                break;

            case "increment":
                this.increment();
                break;

            case "decrement":
                this.decrement();
                break;
        }
    }

    getProperty(propertyName: string): any {
        switch (propertyName) {
            case undefined:
            case "value":
                return this.value;
        }
    }
}