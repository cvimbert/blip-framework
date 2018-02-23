import {VariableData, VariablesData} from "./interfaces/variables-data.interface";
import {Variable} from "./variable.class";

export class VariablesObject {

    _variablesDictionary:{[key:string]:Variable} = {};

    constructor(
        data:VariablesData
    ) {

    }

    loadData(data:VariablesData) {

        let keys:string[] = Object.keys(data.variables);

        keys.forEach((key:string) => {

            let elem:string|VariableData = data.variables[key];

            if (typeof data.variables[key] === "string") {

            } else {

            }
        });
    }
}