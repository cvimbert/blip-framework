import {ScriptUnit} from "./script-unit.class";
import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {EventListener, GameUnitObject} from "../../";

export class StopListenTriggerScript extends ScriptUnit {

    private triggerId: string;

    constructor(
        result: ResultUnit,
        private context: GameUnitObject
    ) {
        super(result);
        this.triggerId = result.results["triggerId"];
    }

    execute() {
        let listener: EventListener = this.context.bindedListeners[this.triggerId];

        if (listener) {
            listener.stoplisten();
        }
    }
}