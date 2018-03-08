export interface Assertions {
    [key: string]: {
        assertions: {
            expression: RegExp,
            values?: string[]
        }[],
        next?: any
    }
}