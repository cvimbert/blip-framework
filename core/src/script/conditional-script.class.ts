import {ScriptUnit} from "./script-unit.class";
import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {Condition, GameUnitObject} from "../../";
import {Script} from "./script.class";
import {ScriptDefinition} from "../definitions/script-definition.class";

export class ConditionalScript extends ScriptUnit {

    private script: Script;
    private elseScript: Script;
    private conditionId: string;

    constructor(
        result: ResultUnit,
        private context: GameUnitObject
    ) {
        super(result);

        this.conditionId = result.results["conditionId"];

        let scriptDefinition: ScriptDefinition = new ScriptDefinition(result);
        this.script = scriptDefinition.create(context);
    }

    execute() {
        let condition: Condition = this.context.getCondition(this.conditionId);

        if (condition.eval()) {
            this.script.execute();
        }
    }
}