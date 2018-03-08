import {ParseUnit} from "./parse-unit.class";
import {PropertyValue} from "./property-value.class";
import {TypedObject} from "./typed-object.class";
import {Assertions} from "../assertions.interface";

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

    constructor (
    ) {
        super();

        this.addAssertionsGroup("bracketsGroup", [
            /^([A-Za-z0-9]+)\s*:\s*\{\s*/
        ], TypedObject);

        this.addAssertionsGroup("simplePropsGroup", [
            /^([A-Za-z0-9]+)\s*:\s*/
        ], PropertyValue);
    }
}