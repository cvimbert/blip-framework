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

        this.addAssertionsGroup("bracketsGroup", [
            /^([A-Za-z0-9]+)\s*:\s*\{\s*/
        ], TypedObject);

        this.addAssertionsGroup("simplePropsGroup", [
            /^([A-Za-z0-9]+)\s*:\s*/
        ], PropertyValue);
    }
}