import {ParseUnit} from "./parse-unit.class";
import {NamedProperty} from "./named-property.class";

export class TypedObject extends ParseUnit {

    constructor(
        code: string,
        pointer: number = 0
    ) {
        super(code, pointer);

        this.addAssertionsGroup("typedObject", {
            to1: /^#([A-Za-z0-9]+)\s*/
        }, NamedProperty);
    }
}