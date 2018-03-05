import {ParseUnit} from "./parse-unit.class";

export class BracketsGroup extends ParseUnit{

    constructor(
        code: string,
        pointer: number
    ) {
        super(code, pointer);
    }
}