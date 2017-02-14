/**
 * Created by Christophe on 03/02/2017.
 */

export class Variable {

    private _currentValue:any;

    static STRING_TYPE:string = "string";
    static NUMBER_TYPE:string = "number";
    static BOOLEAN_TYPE:string = "boolean";

    constructor(
        public type:string,
        public initValue:any
    ) {
        this._currentValue = initValue;
    }

    get():any {
        return this._currentValue;
    }

    set(value:any) {
        this._currentValue = value;
    }

    getType():string {
        return typeof this._currentValue;
    }

    increment() {
        if (this.type === Variable.NUMBER_TYPE) {
            this._currentValue += 1;
        }
    }

    decrement() {
        if (this.type === Variable.NUMBER_TYPE) {
            this._currentValue -= 1;
        }
    }

    reset(newInitValue:any) {

        if (newInitValue) {
            this.initValue = newInitValue;
        }

        this._currentValue = this.initValue;
    }
}