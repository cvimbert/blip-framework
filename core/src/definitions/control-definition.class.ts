import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {Control} from "../gamelogic/control.class";
import {SpriteDefinition} from "./sprite-definition.class";
import {ControlZoneDefinition} from "./control-zone-definition.class";
import {ControlSprite} from "../display/control-sprite.class";

export class ControlDefinition {

    controlSprite: SpriteDefinition;
    zones: {[key: string]: ControlZoneDefinition} = {};
    keyName: string;

    constructor(
        definition: ResultUnit
    ) {
        //console.log(definition);

        this.controlSprite = new SpriteDefinition(definition.getResult("simplePropertyGroup@groupName=sprite")[0]);

        let keyResults: ResultUnit[] = definition.getResult("simplePropertyGroup@groupName=key/string");

        if (keyResults.length > 0) {
            this.keyName = keyResults[0].results["value"];
        }

        definition.getResult("typedObject@type=zone/simplePropsGroup").forEach((definition: ResultUnit) => {
            this.zones[definition.results["groupName"]] = new ControlZoneDefinition(definition);
        });
    }

    create(): Control | {[key: string]: Control} {

        let sprite: ControlSprite = this.controlSprite.createControlSprite();

        if (Object.keys(this.zones).length > 0) {
            let controls: {[key: string]: Control} = {};

            for (let id in this.zones) {
                controls[id] = new Control(sprite, this.zones[id].create(), this.zones[id].keyName);
            }

            return controls;
        } else {
            return new Control(sprite, null, this.keyName);
        }
    }
}