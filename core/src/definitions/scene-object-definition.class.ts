import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {SpriteDefinition} from "./sprite-definition.class";
import {ClockDefinition} from "./clock-definition.class";
import {VariableDefinition} from "./variable-definition.class";
import {TriggerDefinition} from "./trigger-definition.class";
import {ControlDefinition} from "./control-definition.class";
import {GroupDefinition} from "./group-definition.class";
import {GameObjectReference} from "./game-object-reference.class";

export class SceneObjectDefinition {

    backgrounds: {[key: string]: SpriteDefinition} = {};
    clocks: {[key: string]: ClockDefinition} = {};
    variables: {[key: string]: VariableDefinition} = {};
    triggers: {[key: string]: TriggerDefinition} = {};
    controls: {[key: string]: ControlDefinition} = {};

    objects: {[key: string]: GameObjectReference} = {};

    scale: number = 1;

    constructor(
        definition: ResultUnit
    ) {
        let scaleRes: ResultUnit[] = definition.getResult("bracketsGroup/simplePropertyGroup@groupName=scale/number");

        if (scaleRes.length > 0) {
            this.scale = +scaleRes[0].results["value"];
        }

        definition.getResult("bracketsGroup/typedObject@type=background/simplePropsGroup").forEach((definition: ResultUnit) => {
            this.backgrounds[definition.results["groupName"]] = new SpriteDefinition(definition);
        });

        definition.getResult("bracketsGroup/typedObject@type=clock/simplePropsGroup").forEach((definition: ResultUnit) => {
            this.clocks[definition.results["groupName"]] = new ClockDefinition(definition);
        });

        definition.getResult("bracketsGroup/typedObject@type=variable/simplePropsGroup").forEach((definition: ResultUnit) => {
            this.variables[definition.results["groupName"]] = new VariableDefinition(definition);
        });

        definition.getResult("bracketsGroup/typedObject@type=trigger/simplePropsGroup").forEach((definition: ResultUnit) => {
            this.triggers[definition.results["groupName"]] = new TriggerDefinition(definition);
        });

        definition.getResult("bracketsGroup/typedObject@type=control/bracketsGroup").forEach((definition: ResultUnit) => {
            this.controls[definition.results["groupName"]] = new ControlDefinition(definition);
        });

        definition.getResult("bracketsGroup/typedObject@type=object/simplePropsGroup").forEach((definition: ResultUnit) => {
            this.objects[definition.results["groupName"]] = new GameObjectReference(definition);
        });
    }
}