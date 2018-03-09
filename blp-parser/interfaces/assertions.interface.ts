export interface Assertion {
    assertions: {
        expression: RegExp,
        values?: string[]
    }[],
    next?: any
}

export interface Assertions {
    [key: string]: Assertion
}

export interface AssertionResult {
    [key: string]: string|AssertionResult|AssertionResult[]
}