import {Variable} from "../../variables/variable.class";
import {Condition} from "../../condition.class";

export class VariableCondition extends Condition {

    constructor(
        private variable:Variable,
        private statement:string,
    ) {
        super();
    }
}