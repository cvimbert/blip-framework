import {ParseUnit} from "./parse-unit.class";
import {Assertions, AssertionUnit} from "../interfaces/assertions.interface";

export class PropertyValue extends ParseUnit {

    separator: AssertionUnit = {
        expression: /^\s*,\s*|\s+/
    };

    condition: AssertionUnit = {
        expression: /^(?:\s*(!?)\s*([A-Za-z0-9-]+)\s*\?\s*)?/,
        values: ["negation", "conditionId"]
    };

    assertions: Assertions = {
        graphLink: {
            assertions: [
                this.condition,
                {
                    expression: /^([A-Za-z0-9]+)\s*->\s*([A-Za-z0-9]+)/,
                    values: ['triggerId', 'destNode']
                },
                this.separator
            ]
        },
        evalExpression: {
            assertions: [
                {
                    expression: /^([A-Za-z]+)\(([A-Za-z0-9]+)\)(?:\.([A-Za-z0-9_]+))?\s*(===|!==|>|>=|<|<=)\s*([A-Za-z0-9]+)/,
                    values: ["type", "objectId", "propertyName", "operator", "value"]
                },
                this.separator
            ]
        },
        string: {
            assertions: [
                {
                    expression: /^"([A-Za-z0-9\/._]+)"/,
                    values: ['value']
                },
                this.separator
            ]
        },
        number: {
            assertions: [
                {
                    expression: /^(-?[0-9]+(?:\.[0-9]*)?)/,
                    values: ['value']
                },
                this.separator
            ]
        },
        boolean: {
            assertions: [
                {
                    expression: /^(true|false)/,
                    values: ['value']
                },
                this.separator
            ]
        },
        free: {
            assertions: [
                this.condition,
                {
                    expression: /^(?:([A-Za-z0-9]+)(?:\s*\|\s*([A-Za-z0-9]+))?)(?=[\s+,]+)/,
                    values: ['value', 'altValue']
                },
                this.separator
            ]
        },
        typed: {
            assertions: [
                this.condition,
                {
                    expression: /^([A-Za-z]+)\(([A-Za-z0-9]+)\)/,
                    values: ['type', 'value']
                },
                this.separator
            ]
        },
    };
}