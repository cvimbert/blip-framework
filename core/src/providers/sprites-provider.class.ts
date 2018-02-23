import {Provider} from "./provider.class";
import {ExtractionResult} from "reverted-template/src/result/extraction-result.class";

export class SpritesProvider extends Provider {

    constructor() {
        super(
            "[$spriteId:$filePath,$xPos,$yPos]"
        );
    }
}