export interface Triggerable {
    getTrigger(name: string, args?: string[]);
}