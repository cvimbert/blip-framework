import {ParseUnit} from "./parse-unit.class";
import {PropertyValue} from "./property-value.class";
import {TypedObject} from "./typed-object.class";

export class NamedProperty extends ParseUnit {

    constructor (
        code: string,
        parent: ParseUnit = null,
        pointer: number = 0
    ) {
        super(code, parent, pointer);

        let name: RegExp = /^([A-Za-z0-9]+)\s*:\s*/;

        this.addAssertionsGroup("bracketsGroup", {
            bracketsList: /^([A-Za-z0-9]+)\s*:\s*\{\s*/
        }, TypedObject);

        this.addAssertionsGroup("simpleProp", {
            noBrackets: /^([A-Za-z0-9]+)\s*:\s*/
        }, PropertyValue);
    }
}