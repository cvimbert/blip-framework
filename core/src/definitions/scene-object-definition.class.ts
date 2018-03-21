import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {SpriteDefinition} from "./sprite-definition.class";
import {ClockDefinition} from "./clock-definition.class";

export class SceneObjectDefinition {

    backgrounds: {[key: string]: SpriteDefinition} = {};
    clocks: {[key: string]: ClockDefinition} = {};

    constructor(
        definition: ResultUnit
    ) {
        console.log(definition);
    }
}