import {ParseUnit} from "./parse-unit.class";
import {NamedProperty} from "./named-property.class";
import {Assertions} from "../interfaces/assertions.interface";
import {PropertyValue} from "./property-value.class";
import {ScriptGroup} from "./script-group.class";

export class TypedObject extends ParseUnit {

    assertions: Assertions = {
        typedObject: {
            assertions: [
                {
                    expression: /^#([A-Za-z0-9]+)\s*/,
                    values: ['type']
                }
            ],
            next: NamedProperty
        },
        simplePropertyGroup: {
            assertions: [
                {
                    expression: /^([A-Za-z0-9]+)\s*:\s*/,
                    values: ['groupName']
                }
            ],
            next: PropertyValue
        },
        scriptGroup: {
            assertions: [
                {
                    expression: /^@([A-Za-z0-9]+)\s*{\s*/,
                    values: ['scriptName']
                }
            ],
            next: ScriptGroup
        }
    };

    closingExpression: RegExp = /^\s*}\s*/;
}