import {ParseUnit} from "./parse-unit.class";
import {Assertions} from "../interfaces/assertions.interface";
import {Arguments} from "./arguments.class";

export class ActionAndArguments extends ParseUnit {

    assertions: Assertions = {
        actionAndArguments: {
            assertions: [
                {
                    expression: /^([A-Za-z0-9]+)[ ]*/,
                    values: ["actionName"]
                }
            ],
            next: Arguments
        }
    };

    closingExpression: RegExp = /^[ ]*[\n\r]+[ \t\n\r]*/;
}