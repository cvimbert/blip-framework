import {ResultUnit} from "../../../blp-parser/result-unit.class";

export class SoundDefinition {

    filePath: string;

    constructor(
        definition: ResultUnit
    ) {
        this.filePath = definition.children[0].results["value"];
    }
}