import {ParseUnit} from "./parse-unit.class";
import {NamedProperty} from "./named-property.class";
import {Assertions} from "../assertions.interface";

export class TypedObject extends ParseUnit {

    assertions: Assertions = {
        typedObject: {
            assertions: [
                {
                    expression: /^#([A-Za-z0-9]+)\s*/,
                    values: ['type']
                }
            ],
            next: NamedProperty
        }
    };

    closingExpression: RegExp = /^\s*\}\s*/;

    constructor(
    ) {
        super();

        this.addAssertionsGroup("typedObject", [
            /^#([A-Za-z0-9]+)\s*/
        ], NamedProperty);

        this.setClosingGroup([
            /^\s*\}\s*/
        ]);
    }
}