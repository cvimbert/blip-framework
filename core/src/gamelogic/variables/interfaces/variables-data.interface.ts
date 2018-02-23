export interface VariableData {
    initValue:string|number|boolean;
}

export interface VariablesData {
    variables:{[key:string]:VariableData|string};
}