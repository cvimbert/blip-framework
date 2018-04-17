import {ParseUnit} from "../parse-unit.class";
import {Assertions, AssertionUnit} from "../../interfaces/assertions.interface";

export class SelectorProperties extends ParseUnit {

    separator: AssertionUnit = {
        expression: /^\s*,\s*|\s+/
    };

    assertions: Assertions = {

        selectorProperties: {
            assertions: [
                {
                    expression: /^\s*(\.[A-Za-z0-9_]+)\s*/,
                    values: ["properties"]
                }
            ]
        }
    }
}