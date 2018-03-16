export interface Assertion {
    assertions: {
        expression: RegExp,
        values?: string[]
    }[],
    next?: any,
    mode?: string
}

export interface AssertionUnit {
    expression: RegExp,
    values?: string[]
}

export interface StructureUnit {
    assertions: AssertionUnit[],
    child?: string
}

export interface Assertions {
    [key: string]: Assertion
}

export interface AssertionResult {
    [key: string]: string | AssertionResult | AssertionResult[]
}

export interface CodeStructure {
    structures: {[key: string]: {[key: string]: StructureUnit}},
    root: string
}