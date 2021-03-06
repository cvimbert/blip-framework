import {ParseUnit} from "./parse-unit.class";
import {Assertions} from "../interfaces/assertions.interface";
import {ActionAndArguments} from "./action-and-arguments.class";

export class ScriptGroup extends ParseUnit {

    assertions: Assertions = {
        actionOnObject: {
            assertions: [
                {
                    expression: /^([A-Za-z0-9]+)[ ]+([A-Za-z0-9_-]+)[ \t]*>[ \t]*/,
                    values: ["objectType", "objectName"]
                }
            ],
            next: ActionAndArguments
        },
        triggerScript: {
            assertions: [
                {
                    expression: /^listen[ ]*\([ ]*([A-Za-z0-9-_]+)[ ]*\)\s*{\s*/,
                    values: ["triggerId"]
                }
            ],
            next: ScriptGroup
        },
        conditionalScript: {
            assertions: [
                {
                    expression: /^if[ ]*\([ ]*([A-Za-z0-9-_]+)[ ]*\)\s*{\s*/,
                    values: ["conditionId"]
                }
            ],
            next: ScriptGroup
        },
        stopListenTrigger: {
            assertions: [
                {
                    expression: /^stoplisten[ ]*\([ ]*([A-Za-z0-9-_]+)[ ]*\)\s*/,
                    values: ["triggerId"]
                }
            ]
        },
        simpleCommand: {
            assertions: [
                {
                    expression: /^([A-Za-z0-9-_]+)(?:[ ]+([A-Za-z0-9-_ ]+))?\s*/,
                    values: ["commandName", "args"]
                }
            ]
        }
    };

    closingExpression: RegExp = /^\s*}\s*/;
}