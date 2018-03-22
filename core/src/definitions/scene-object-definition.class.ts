import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {SpriteDefinition} from "./sprite-definition.class";
import {ClockDefinition} from "./clock-definition.class";
import {VariableDefinition} from "./variable-definition.class";
import {TriggerDefinition} from "./trigger-definition.class";
import {ControlDefinition} from "./control-definition.class";
import {GroupDefinition} from "./group-definition.class";

export class SceneObjectDefinition {

    backgrounds: {[key: string]: SpriteDefinition} = {};
    clocks: {[key: string]: ClockDefinition} = {};
    variables: {[key: string]: VariableDefinition} = {};
    triggers: {[key: string]: TriggerDefinition} = {};
    controls: {[key: string]: ControlDefinition} = {};

    constructor(
        definition: ResultUnit
    ) {
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
    }
}