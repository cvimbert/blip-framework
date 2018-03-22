import {TypedObject} from "../../../blp-parser/parse-units/typed-object.class";
import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {SpriteDefinition} from "./sprite-definition.class";
import {ClockDefinition} from "./clock-definition.class";
import {GroupDefinition} from "./group-definition.class";
import {SoundDefinition} from "./sound-definition.class";
import {VariableDefinition} from "./variable-definition.class";
import {GameUnitObject} from "../global-objects/game-unit-object.class";

export class GameObjectDefinition {

    sprites: {[key: string]: SpriteDefinition} = {};
    clocks: {[key: string]: ClockDefinition} = {};
    groups: {[key: string]: GroupDefinition} = {};
    sounds: {[key: string]: SoundDefinition} = {};
    variables: {[key: string]: VariableDefinition} = {};

    constructor(
        definition: ResultUnit
    ) {
        definition.getResult("bracketsGroup/typedObject@type=sprite/simplePropsGroup").forEach((definition: ResultUnit) => {
            this.sprites[definition.results["groupName"]] = new SpriteDefinition(definition);
        });

        definition.getResult("bracketsGroup/typedObject@type=clock/simplePropsGroup").forEach((definition: ResultUnit) => {
            this.clocks[definition.results["groupName"]] = new ClockDefinition(definition);
        });

        definition.getResult("bracketsGroup/typedObject@type=group/bracketsGroup").forEach((definition: ResultUnit) => {
            this.groups[definition.results["groupName"]] = new GroupDefinition(definition);
        });

        definition.getResult("bracketsGroup/typedObject@type=sound/simplePropsGroup").forEach((definition: ResultUnit) => {
            this.sounds[definition.results["groupName"]] = new SoundDefinition(definition);
        });

        definition.getResult("bracketsGroup/typedObject@type=variable/simplePropsGroup").forEach((definition: ResultUnit) => {
            this.variables[definition.results["groupName"]] = new VariableDefinition(definition);
        });
    }

    create(): GameUnitObject {
        return new GameUnitObject(this);
    }
}