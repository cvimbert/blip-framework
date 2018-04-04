import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {BaseTrigger} from "../triggers/base-trigger.class";
import {ControlDownTrigger} from "../triggers/controls/control-down-trigger.class";
import {GameUnitObject} from "../global-objects/game-unit-object.class";
import {SceneUnitObject} from "../global-objects/scene-unit-object.class";
import {TimeTrigger} from "../triggers/time-trigger.class";

export class TriggerDefinition {

    type: string;
    arguments: any[] = [];

    constructor(
        definition: ResultUnit
    ) {
        this.type = definition.children[0].results["value"];

        for (let i: number = 1; i < definition.children.length; i++) {

            let valueUnit: ResultUnit = definition.children[i];

            // only string or number (must be extended)
            if (valueUnit.type === "number") {
                this.arguments.push(+valueUnit.results["value"]);
            } else {
                this.arguments.push(valueUnit.results["value"]);
            }
        }
    }

    create(scope: SceneUnitObject | GameUnitObject): BaseTrigger {

        switch (this.type) {

            case "controldown":
                return new ControlDownTrigger(scope.getControl(this.arguments[0]));

            case "time":
                return new TimeTrigger(+this.arguments[0]);
        }
    }
}