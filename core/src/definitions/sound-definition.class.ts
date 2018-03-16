import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {Sound} from "../sound/sound.class";
import {File} from "../files/file.class";

export class SoundDefinition {

    filePath: string;

    constructor(
        definition: ResultUnit
    ) {
        this.filePath = definition.children[0].results["value"];
    }

    create(): Sound {
        let file: File = new File(this.filePath);
        return new Sound(file);
    }
}