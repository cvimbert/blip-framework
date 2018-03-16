import {ResultUnit} from "../../../blp-parser/result-unit.class";

export class GroupStateDefinition {

    // or other, see later
    sprites: string[] = [];

    constructor(
        definition: ResultUnit
    ) {
        definition.getResult("free").forEach((result: ResultUnit) => {
            this.sprites.push(result.results["value"]);
        });
    }
}