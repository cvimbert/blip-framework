import {ParseUnit} from "./parse-unit.class";
import {NamedProperty} from "./named-property.class";

export class PropertyValue extends ParseUnit {

    constructor(
        code: string,
        parent: ParseUnit = null,
        pointer: number
    ) {
        super(code, parent, pointer);

        let separator: RegExp = /^\s*,\s*|\s+/;

        this.addAssertionsGroup("hhh", {
            el: /^([A-Za-z0-9]+\s*-\>\s*[A-Za-z0-9]+)/,
            sep: separator
        });

        this.addAssertionsGroup("string", {
            string: /^"([A-Za-z0-9]+)"/,
            sep: separator
        });

        this.addAssertionsGroup("number", {
            number: /^([0-9]+(?:\.[0-9]*)?)/,
            sep: separator
        });

        this.addAssertionsGroup("boolean", {
            boolean: /^(true|false)/,
            sep: separator
        });

        this.addAssertionsGroup("nm", {
            freeCharValue: /^(?:([A-Za-z0-9]+))(?=[\s+,]+)/,
            sep: separator
        }, PropertyValue);

        this.addAssertionsGroup("tpprop", {
            nm2: /^([A-Za-z]+\([A-Za-z0-9]+\))/,
            sep: separator
        });
    }
}