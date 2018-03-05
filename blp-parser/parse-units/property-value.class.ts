import {ParseUnit} from "./parse-unit.class";
import {NamedProperty} from "./named-property.class";

export class PropertyValue extends ParseUnit {

    constructor(
        code: string,
        pointer: number
    ) {
        super(code, pointer);

        this.addAssertionsGroup("string", {
            string: /^"([A-Za-z0-9]*)"/,
            sep: /^\s*,\s*|\s*/
        }, PropertyValue);

        this.addAssertionsGroup("number", {
            number: /^([0-9]+(?:\.[0-9]*)?)/,
            sep: /^\s*,\s*|\s*/
        }, PropertyValue);

        this.addAssertionsGroup("boolean", {
            boolean: /^(true|false)/,
            sep: /^\s*,\s*|\s*/
        }, PropertyValue);

        this.addAssertionsGroup("default", null, NamedProperty);
    }
}