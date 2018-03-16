import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {Variable} from "../gamelogic/variables/variable.class";

export class VariableDefinition {

    initValue: string | number | boolean;

    constructor(
        definition: ResultUnit
    ) {
        let type: string = definition.children[0].type;
        let value: string = definition.children[0].results["value"];

        switch (type) {
            case "string":
                this.initValue = value;
                break;

            case "number":
                this.initValue = +value;
                break;

            case "boolean":
                this.initValue = value === "true";
        }
    }

    create(): Variable {
        return new Variable(this.initValue);
    }
}