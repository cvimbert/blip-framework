import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {Clock} from "../gamelogic/clock.class";

export class ClockDefinition {

    interval: number;

    constructor(
        definition: ResultUnit
    ) {
        this.interval = +definition.children[0].results["value"];
    }

    create(): Clock {
        return new Clock(this.interval);
    }
}