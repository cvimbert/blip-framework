import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {ScriptUnit} from "./script-unit.class";
import {ActionOnObjectScript} from "./action-on-object-script.class";
import {GameUnitObject} from "../global-objects/game-unit-object.class";
import {SceneUnitObject} from "../global-objects/scene-unit-object.class";
import {ListenTriggerScript} from "./listen-trigger-script.class";
import {Actionable} from "./interfaces/actionable.interface";
import {StopListenTriggerScript} from "./stop-listen-trigger-script";
import {SimpleCommandScript} from "./simple-command-script.class";
import {ConditionalScript} from "./conditional-script.class";

export class Script implements Actionable {

    units: ScriptUnit[] = [];

    constructor(
        results: ResultUnit,
        context: GameUnitObject
    ) {
        for (let result of results.children) {

            switch (result.type) {
                case "actionOnObject":
                    this.units.push(new ActionOnObjectScript(result, context));
                    break;

                case "triggerScript":
                    this.units.push(new ListenTriggerScript(result, context));
                    break;

                case "stopListenTrigger":
                    this.units.push(new StopListenTriggerScript(result, context));
                    break;

                case "simpleCommand":
                    this.units.push(new SimpleCommandScript(result, context));
                    break;

                case "conditionalScript":
                    this.units.push(new ConditionalScript(result, context));
                    break;
            }
        }
    }

    execute() {
        this.units.forEach((unit: ScriptUnit) => {
            unit.execute();
        });
    }

    executeAction(actionName: string, args: string[]) {
        switch (actionName) {
            case "execute":
                this.execute();
                break;
        }
    }
}