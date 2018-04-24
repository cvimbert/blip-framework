import {ParseUnit} from "../parse-unit.class";
import {Assertions} from "../../interfaces/assertions.interface";

export class SelectorProperties extends ParseUnit {

    assertions: Assertions = {

        selectorProperties: {
            assertions: [
                {
                    expression: /^\s*\.([A-Za-z0-9_]+)\s*/,
                    values: ["propertyName"]
                }
            ],
            next: SelectorProperties
        }
    }
}