import {ScriptUnit} from "./script-unit.class";
import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {GameUnitObject} from "../../";

export class SimpleCommandScript extends ScriptUnit {

    commandName: string;
    args: string[];

    constructor(
        result: ResultUnit,
        private context: GameUnitObject
    ) {
        super(result);
        this.commandName = result.results["commandName"];

        if (result.results["args"]) {
            this.args = result.results["args"].split(/ +/g).filter((item: string) => {
                return item !== "";
            });
        }
    }

    execute() {
        this.context.executeAction(this.commandName, this.args);
    }
}