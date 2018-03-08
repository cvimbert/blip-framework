import {ParseUnit} from "./parse-unit.class";
import {NamedProperty} from "./named-property.class";

export class TypedObject extends ParseUnit {

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