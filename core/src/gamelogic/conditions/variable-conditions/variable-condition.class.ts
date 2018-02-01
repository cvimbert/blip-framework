import {Variable} from "../../variable.class";
import {Condition} from "../../condition.class";

export class VariableCondition extends Condition {

    constructor(
        private variable:Variable,
        testFunction:Function
    ) {
        super(testFunction);
    }
}