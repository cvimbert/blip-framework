import {ParseUnit} from "./parse-unit.class";
import {NamedProperty} from "./named-property.class";
import {GraphLink} from "./graph-link.class";
import {Assertions} from "../assertions.interface";

export class PropertyValue extends ParseUnit {

    separator: RegExp = /^\s*,\s*|\s+/;

    assertions: Assertions = {
        graphLink: {
            assertions: [
                {
                    expression: /^([A-Za-z0-9]+)\s*-\>\s*([A-Za-z0-9]+)/,
                    values: ['triggerId', 'destNode']
                },
                {
                    expression: this.separator
                }
            ],
            next: GraphLink
        },
        string: {
            assertions: [
                {
                    expression: /^"([A-Za-z0-9]+)"/,
                    values: ['value']
                },
                {
                    expression: this.separator
                }
            ]
        },
        number: {
            assertions: [
                {
                    expression: /^([0-9]+(?:\.[0-9]*)?)/,
                    values: ['value']
                },
                {
                    expression: this.separator
                }
            ]
        },
        boolean: {
            assertions: [
                {
                    expression: /^(true|false)/,
                    values: ['value']
                },
                {
                    expression: this.separator
                }
            ]
        },
        free: {
            assertions: [
                {
                    expression: /^(?:([A-Za-z0-9]+))(?=[\s+,]+)/,
                    values: ['value']
                },
                {
                    expression: this.separator
                }
            ]
        },
        typed: {
            assertions: [
                {
                    expression: /^([A-Za-z]+)\(([A-Za-z0-9]+)\)/,
                    values: ['type', 'value']
                },
                {
                    expression: this.separator
                }
            ]
        }
    };

    constructor(
    ) {
        super();

        let separator: RegExp = /^\s*,\s*|\s+/;

        this.addAssertionsGroup("graphLink",
            [
            /^([A-Za-z0-9]+)\s*-\>\s*([A-Za-z0-9]+)/,
            separator
        ], GraphLink);

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