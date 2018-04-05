export interface Actionable {
    executeAction(actionName: string, args:string[]);
}