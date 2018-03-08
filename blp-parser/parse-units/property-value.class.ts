import {ParseUnit} from "./parse-unit.class";
import {NamedProperty} from "./named-property.class";

export class PropertyValue extends ParseUnit {

    constructor(
    ) {
        super();

        let separator: RegExp = /^\s*,\s*|\s+/;

        this.addAssertionsGroup("graphLink",
            [
            /^([A-Za-z0-9]+\s*-\>\s*[A-Za-z0-9]+)/,
            separator
        ]);

        this.addAssertionsGroup("string",
            [
            /^"([A-Za-z0-9]+)"/,
            separator
        ]);

        this.addAssertionsGroup("number",
            [
            /^([0-9]+(?:\.[0-9]*)?)/,
            separator
        ]);

        this.addAssertionsGroup("boolean",
            [
                /^(true|false)/,
                separator
            ]);

        this.addAssertionsGroup("typedProperty",
            [
            /^(?:([A-Za-z0-9]+))(?=[\s+,]+)/,
            separator
        ]);

        this.addAssertionsGroup("freeProperty",
            [
            /^([A-Za-z]+\([A-Za-z0-9]+\))/,
            separator
        ]);
    }
}