import {SceneObjectDefinition} from "../definitions/scene-object-definition.class";
import {Sprite} from "../display/sprite.class";
import {Clock} from "../gamelogic/clock.class";
import {Variable} from "../gamelogic/variables/variable.class";
import {BaseTrigger} from "../triggers/base-trigger.class";
import {Control} from "../gamelogic/control.class";

export class SceneUnitObject {

    backgrounds: Sprite[] = [];
    clocks: {[key: string]: Clock} = {};
    variables: {[key: string]: Variable} = {};
    triggers: {[key: string]: BaseTrigger} = {};
    controls: {[key: string]: Control} = {};

    constructor(
        definition: SceneObjectDefinition
    ) {
        for (let id in definition.backgrounds) {
            this.backgrounds.push(definition.backgrounds[id].createBasicSprite());
        }

        for (let id in definition.clocks) {
            this.clocks[id] = definition.clocks[id].create();
        }

        for (let id in definition.variables) {
            this.variables[id] = definition.variables[id].create();
        }

        for (let id in definition.triggers) {
            this.triggers[id] = definition.triggers[id].create();
        }

        for (let id in definition.controls) {
            let controls: Control | {[key: string]: Control} = definition.controls[id].create();

            if (controls instanceof Control) {
                this.controls[id] = controls;
            } else {
                for (let zoneId in controls) {
                    this.controls[id + "_" + zoneId] = controls[zoneId];
                }
            }
        }

        console.log(this);
    }
}