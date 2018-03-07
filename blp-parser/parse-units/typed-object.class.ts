import {ParseUnit} from "./parse-unit.class";
import {NamedProperty} from "./named-property.class";

export class TypedObject extends ParseUnit {

    constructor(
        code: string,
        parent: ParseUnit = null,
        pointer: number = 0
    ) {
        super(code, parent, pointer);

        this.addAssertionsGroup("typedObject", [
            /^#([A-Za-z0-9]+)\s*/
        ], NamedProperty);

        this.setClosingGroup([
            /^\s*\}\s*/
        ]);
    }
}