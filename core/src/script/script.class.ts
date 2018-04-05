import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {ScriptUnit} from "./script-unit.class";
import {ActionOnObjectScript} from "./action-on-object-script.class";
import {GameUnitObject} from "../global-objects/game-unit-object.class";
import {SceneUnitObject} from "../global-objects/scene-unit-object.class";

export class Script {

    units: ScriptUnit[] = [];

    constructor(
        results: ResultUnit,
        context: GameUnitObject | SceneUnitObject
    ) {
        for (let result of results.children) {

            switch (result.type) {
                case "actionOnObject":
                    this.units.push(new ActionOnObjectScript(result, context));
                    break;
            }
        }
    }

    execute() {
        this.units.forEach((unit: ScriptUnit) => {
            unit.execute();
        });
    }
}