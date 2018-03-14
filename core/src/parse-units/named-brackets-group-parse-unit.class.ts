import {ParseUnit} from "../../../blp-parser/parse-units/parse-unit.class";
import {TypedObject} from "../../../blp-parser/parse-units/typed-object.class";
import {PropertyValue} from "../../../blp-parser/parse-units/property-value.class";
import {Assertions} from "../../../blp-parser/interfaces/assertions.interface";
import {ObjectTypesParseUnit} from "./object-types-parse-unit.class";

export class NamedBracketsGroup extends ParseUnit {

    assertions: Assertions = {
        namedBracketsGroup: {
            assertions: [
                {
                    expression: /^([A-Za-z0-9]+)\s*:\s*\{\s*/,
                    values: ['groupName']
                }
            ],
            next: ObjectTypesParseUnit
        }
    };
}