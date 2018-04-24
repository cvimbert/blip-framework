import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {Condition} from "../gamelogic/condition.class";
import {GameUnitObject} from "../global-objects/game-unit-object.class";
import {Gettable} from "../interfaces/gettable.interface";
import {Operand} from "../../../blp-parser/parse-units/logical-expression/operand.class";
import {LogicalExpression} from "../gamelogic/conditions/logical-expression/logical-expression.class";

export class ConditionDefinition {

    type: string;
    objectId: string;
    propertyName: string;
    operator: string;
    value: string;

    operand1: ResultUnit;
    operand2: ResultUnit;

    constructor(
        definition: ResultUnit
    ) {
        let data: ResultUnit = definition.children[0];

        this.type = data.results["type"];
        this.objectId = data.results["objectId"];
        this.operator = data.results["operator"];
        this.value = data.results["value"];
        this.propertyName = data.results["propertyName"];

        console.log(data);

        if (data.type === "logicalExpression") {
            let operand1Unit: Operand = new Operand();
            operand1Unit.code = data.results["operand1"];
            this.operand1 = operand1Unit.evaluate()[0];

            let operand2Unit: Operand = new Operand();
            operand2Unit.code = data.results["operand2"];
            this.operand2 = operand2Unit.evaluate()[0];

            this.operator = data.results["operator"];
        }
    }

    create(context: GameUnitObject): Condition {

        return new Condition(() => {

            if (this.operand1 && this.operand2 && this.operator) {
                let expression: LogicalExpression = new LogicalExpression(this.operand1, this.operator, this.operand2);
                return expression.evaluate(context);
            } else {

                // TODO: other cases must be implemented
                return true;
            }
        });
    }
}