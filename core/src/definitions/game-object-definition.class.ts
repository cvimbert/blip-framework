import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {SpriteDefinition} from "./sprite-definition.class";
import {ClockDefinition} from "./clock-definition.class";
import {GroupDefinition} from "./group-definition.class";
import {SoundDefinition} from "./sound-definition.class";
import {VariableDefinition} from "./variable-definition.class";
import {GameUnitObject} from "../global-objects/game-unit-object.class";
import {GraphDefinition} from "./graph-definition.class";
import {TriggerDefinition} from "./trigger-definition.class";
import {SceneUnitObject} from "../global-objects/scene-unit-object.class";
import {GameObjectReference} from "./game-object-reference.class";
import {SequenceDefinition} from "./sequence-definition.class";
import {AnimationDefinition} from "./animation-definition.class";
import {GroupStateDefinition} from "./group-state-definition.class";
import {Script} from "../script/script.class";

export class GameObjectDefinition {

    sprites: {[key: string]: SpriteDefinition} = {};
    clocks: {[key: string]: ClockDefinition} = {};
    groups: {[key: string]: GroupDefinition} = {};
    sounds: {[key: string]: SoundDefinition} = {};
    variables: {[key: string]: VariableDefinition} = {};
    graphs: {[key: string]: GraphDefinition} = {};
    triggers: {[key: string]: TriggerDefinition} = {};
    sequences: {[key: string]: SequenceDefinition} = {};
    animations: {[key: string]: AnimationDefinition} = {};
    states: {[key: string]: GroupStateDefinition} = {};

    objects: {[key: string]: GameObjectReference} = {};

    scripts: {[key: string]: Script} = {};

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

        definition.getResult("bracketsGroup/typedObject@type=graph/bracketsGroup").forEach((definition: ResultUnit) => {
            this.graphs[definition.results["groupName"]] = new GraphDefinition(definition);
        });

        definition.getResult("bracketsGroup/typedObject@type=trigger/simplePropsGroup").forEach((definition: ResultUnit) => {
            this.triggers[definition.results["groupName"]] = new TriggerDefinition(definition);
        });

        definition.getResult("bracketsGroup/typedObject@type=object/simplePropsGroup").forEach((definition: ResultUnit) => {
            this.objects[definition.results["groupName"]] = new GameObjectReference(definition);
        });

        definition.getResult("bracketsGroup/typedObject@type=state/simplePropsGroup").forEach((definition: ResultUnit) => {
            this.states[definition.results["groupName"]] = new GroupStateDefinition(definition);
        });

        definition.getResult("bracketsGroup/typedObject@type=sequence/simplePropsGroup").forEach((definition: ResultUnit) => {
            this.sequences[definition.results["groupName"]] = new SequenceDefinition(definition);
        });

        definition.getResult("bracketsGroup/typedObject@type=animation/simplePropsGroup").forEach((definition: ResultUnit) => {
            this.animations[definition.results["groupName"]] = new AnimationDefinition(definition);
        });

        definition.getResult("bracketsGroup/scriptGroup").forEach((script: ResultUnit) => {
            console.log("sc", script);
        });
    }

    create(scene: SceneUnitObject): GameUnitObject {
        return new GameUnitObject(this, scene);
    }
}