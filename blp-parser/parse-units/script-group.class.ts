import {ParseUnit} from "./parse-unit.class";
import {Assertions} from "../interfaces/assertions.interface";
import {ActionAndArguments} from "./action-and-arguments.class";

export class ScriptGroup extends ParseUnit {

    assertions: Assertions = {
        actionOnObject: {
            assertions: [
                {
                    expression: /^([A-Za-z0-9]+)[ ]+([A-Za-z0-9_-]+)[ ]*<[ ]*/,
                    values: ["objectType", "objectName"]
                }
            ],
            next: ActionAndArguments
        }
    };

    closingExpression: RegExp = /^\s*}\s*/;
}