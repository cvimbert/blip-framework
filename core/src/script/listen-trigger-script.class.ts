import {ScriptUnit} from "./script-unit.class";
import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {SceneUnitObject} from "../global-objects/scene-unit-object.class";
import {GameUnitObject} from "../global-objects/game-unit-object.class";
import {BaseTrigger} from "../triggers/base-trigger.class";
import {Script} from "./script.class";
import {ScriptDefinition} from "../definitions/script-definition.class";
import {Events} from "../common/events.class";

export class ListenTriggerScript extends ScriptUnit {

    trigger: BaseTrigger;
    script: Script;

    constructor(
        result: ResultUnit,
        context: GameUnitObject | SceneUnitObject
    ) {
        super(result);
        this.trigger = context.getTrigger(result.results["triggerId"]);

        let scriptDefinition: ScriptDefinition = new ScriptDefinition(result);
        this.script = scriptDefinition.create(context);
    }

    execute() {
        this.trigger.listen(Events.TRIGGER_ACTION, () => {
            this.script.execute();
        });
    }
}