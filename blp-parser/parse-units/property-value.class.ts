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

        this.addAssertionsGroup("hhh",
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
            ]
        );

        this.addAssertionsGroup("nm",
            [
            /^(?:([A-Za-z0-9]+))(?=[\s+,]+)/,
            separator
        ]);

        this.addAssertionsGroup("tpprop",
            [
            /^([A-Za-z]+\([A-Za-z0-9]+\))/,
            separator
        ]);
    }
}