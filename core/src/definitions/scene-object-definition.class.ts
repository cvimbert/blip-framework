import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {SpriteDefinition} from "./sprite-definition.class";
import {ControlDefinition} from "./control-definition.class";
import {GameObjectDefinition} from "./game-object-definition.class";

export class SceneObjectDefinition extends GameObjectDefinition {

    backgrounds: {[key: string]: SpriteDefinition} = {};
    controls: {[key: string]: ControlDefinition} = {};

    scale: number = 1;

    constructor(
        definition: ResultUnit
    ) {
        super(definition);

        let scaleRes: ResultUnit[] = definition.getResult("bracketsGroup/simplePropertyGroup@groupName=scale/number");

        if (scaleRes.length > 0) {
            this.scale = +scaleRes[0].results["value"];
        }

        definition.getResult("bracketsGroup/typedObject@type=background/simplePropsGroup").forEach((definition: ResultUnit) => {
            this.backgrounds[definition.results["groupName"]] = new SpriteDefinition(definition);
        });

        definition.getResult("bracketsGroup/typedObject@type=control/bracketsGroup").forEach((definition: ResultUnit) => {
            this.controls[definition.results["groupName"]] = new ControlDefinition(definition);
        });
    }
}