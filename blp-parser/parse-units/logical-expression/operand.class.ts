import {ParseUnit} from "../parse-unit.class";
import {Assertions} from "../../interfaces/assertions.interface";
import {SelectorProperties} from "./selector-properties.class";

export class Operand extends ParseUnit {

    assertions: Assertions = {
        string: {
            assertions: [
                {
                    expression: /^\s*"([A-Za-z0-9\/._]+)"\s*/,
                    values: ['value']
                }
            ]
        },
        number: {
            assertions: [
                {
                    expression: /^\s*(-?[0-9]+(?:\.[0-9]*)?)\s*/,
                    values: ['value']
                }
            ]
        },
        boolean: {
            assertions: [
                {
                    expression: /^\s*(true|false)\s*/,
                    values: ['value']
                }
            ]
        },
        selector: {
            assertions: [
                {
                    expression: /^\s*([A-Za-z]+)\s*\(\s*([A-Za-z0-9_]+)\s*\)\s*/,
                    values: ["objectType", "objectId"]
                }
            ],
            next: SelectorProperties
        }
    }
}