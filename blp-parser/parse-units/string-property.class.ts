import {ParseUnit} from "./parse-unit.class";

export class StringProperty extends ParseUnit {

    constructor(
        code: string,
        pointer: number = 0
    ) {
        super(code, pointer);


    }
}