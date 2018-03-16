import {ResultUnit} from "../../../blp-parser/result-unit.class";

export class SpriteDefinition {

    filePath: string;
    x: number;
    y: number;

    constructor(
        definition: ResultUnit
    ) {
        this.filePath = definition.children[0].results["value"];
        this.x = +definition.children[1].results["value"];
        this.y = +definition.children[2].results["value"];
    }
}