import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {ControlZone} from "../gamelogic/control.class";

export class ControlZoneDefinition {

    x: number;
    y: number;
    width: number;
    height: number;
    keyName: string;

    constructor(
        definition: ResultUnit
    ) {
        this.x = +definition.children[0].results["value"];
        this.y = +definition.children[1].results["value"];
        this.width = +definition.children[2].results["value"];
        this.height = +definition.children[3].results["value"];

        this.keyName = definition.children[4].results["value"];
    }

    create(): ControlZone {
        return new ControlZone(this.x, this.y, this.width, this.height);
    }
}