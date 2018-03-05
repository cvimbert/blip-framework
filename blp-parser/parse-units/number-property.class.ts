import {ParseUnit} from "./parse-unit.class";

export class NumberProperty extends ParseUnit {

    constructor(
        code: string,
        pointer: number = 0
    ) {
        super(code, pointer);
    }
}