import {ResultUnit} from "../../../blp-parser/result-unit.class";

export class ClockDefinition {

    interval: number;

    constructor(
        definition: ResultUnit
    ) {
        this.interval = +definition.children[0].results["value"];
    }
}