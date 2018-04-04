import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {ScriptUnit} from "./script-unit.class";

export class Script {

    units: ScriptUnit[] = [];

    constructor(
        results: ResultUnit
    ) {
        for (let result of results.children) {

        }
    }
}