import {ResultUnit} from "../../../blp-parser/result-unit.class";

export class SequenceDefinition {

    // or others...
    states: string[] = [];

    constructor(
        definition: ResultUnit
    ) {
        definition.getResult("free").forEach((result: ResultUnit) => {
            this.states.push(result.results["value"]);
        });
    }
}