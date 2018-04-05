import {ScriptUnit} from "./script-unit.class";
import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {Actionable} from "./interfaces/actionable.interface";
import {GameUnitObject} from "../global-objects/game-unit-object.class";
import {SceneUnitObject} from "../global-objects/scene-unit-object.class";

export class ActionOnObjectScript extends ScriptUnit {

    targetObject: Actionable;
    actionName: string;
    actionArgs: string[] = [];

    constructor(
        result: ResultUnit,
        context: GameUnitObject | SceneUnitObject
    ) {
        super(result);
        this.targetObject = context.getActionable(result.results["objectType"], result.results["objectName"]);

        this.actionName = result.getResult("actionAndArguments")[0].results["actionName"];

        result.getResult("actionAndArguments/argument").forEach((res: ResultUnit) => {
            this.actionArgs.push(res.results["value"]);
        });
    }

    execute() {
        this.targetObject.executeAction(this.actionName, this.actionArgs);
    }
}