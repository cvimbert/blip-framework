import {ParseUnit} from "./parse-unit.class";
import {Assertions} from "../interfaces/assertions.interface";

export class Arguments extends ParseUnit {


    assertions: Assertions = {
        argument: {
            assertions: [
                {
                    expression: /^"?([A-Za-z0-9]+)"?[ ]*/,
                    values: ["value"]
                }
            ]
        }
    };

    closingExpression: RegExp = /^[ ]*[\n\r]+[ \t]*/;
}