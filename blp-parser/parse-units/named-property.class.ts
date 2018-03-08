import {ParseUnit} from "./parse-unit.class";
import {PropertyValue} from "./property-value.class";
import {TypedObject} from "./typed-object.class";

export class NamedProperty extends ParseUnit {

    constructor (
    ) {
        super();

        this.addAssertionsGroup("bracketsGroup", [
            /^([A-Za-z0-9]+)\s*:\s*\{\s*/
        ], TypedObject);

        this.addAssertionsGroup("simplePropsGroup", [
            /^([A-Za-z0-9]+)\s*:\s*/
        ], PropertyValue);
    }
}