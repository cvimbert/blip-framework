import {ParseUnit} from "./parse-unit.class";
import {PropertyValue} from "./property-value.class";
import {TypedObject} from "./typed-object.class";
import {Assertions} from "../interfaces/assertions.interface";

export class NamedProperty extends ParseUnit {

    assertions: Assertions = {
        bracketsGroup: {
            assertions: [
                {
                    expression: /^([A-Za-z0-9]+)\s*:\s*\{\s*/,
                    values: ['groupName']
                }
            ],
            next: TypedObject
        },
        simplePropsGroup: {
            assertions: [
                {
                    expression: /^([A-Za-z0-9]+)\s*:\s*/,
                    values: ['groupName']
                }
            ],
            next: PropertyValue
        }
    };
}