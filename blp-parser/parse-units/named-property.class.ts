import {ParseUnit} from "./parse-unit.class";
import {PropertyValue} from "./property-value.class";
import {TypedObject} from "./typed-object.class";

export class NamedProperty extends ParseUnit {

    constructor (
        code: string,
        pointer: number = 0
    ) {
        super(code, pointer);

        this.addAssertionsGroup("bracketsGroup", {
            bracketsList: /^([A-Za-z0-9]+)\s*:\s*\{\s*/
        }, TypedObject);

        this.addAssertionsGroup("simpleProp", {
            noBrackets: /^([A-Za-z0-9]+)\s*:\s*/
        }, PropertyValue);

        this.addAssertionsGroup("default", null, TypedObject);
    }
}