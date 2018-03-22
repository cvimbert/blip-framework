import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {Sprite} from "../display/sprite.class";
import {File} from "../files/file.class";
import {ControlSprite} from "../display/control-sprite.class";
import {Decoration} from "../display/decoration.class";

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

    createBasicSprite(): Sprite {
        let file: File = new File(this.filePath);
        return new Sprite(file, this.x, this.y);
    }

    createControlSprite(): ControlSprite {
        let file: File = new File(this.filePath);
        return new ControlSprite(file, this.x, this.y);
    }

    createDecorationSprite(): Decoration {
        let file: File = new File(this.filePath);
        return new Decoration(file, this.x, this.y);
    }
}