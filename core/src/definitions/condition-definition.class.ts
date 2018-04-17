import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {Condition} from "../gamelogic/condition.class";
import {GameUnitObject} from "../global-objects/game-unit-object.class";
import {Gettable} from "../interfaces/gettable.interface";
import {Operand} from "../../../blp-parser/parse-units/logical-expression/operand.class";

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

        let operand1Unit: Operand = new Operand();
        operand1Unit.code = data.results["operand1"];
        console.log("ev1", operand1Unit.evaluate());

        let operand2Unit: Operand = new Operand();
        operand2Unit.code = data.results["operand2"];
        console.log(data.results["operand2"]);
        console.log("ev2", operand2Unit.evaluate());
    }

    create(context: GameUnitObject): Condition {
        return new Condition(() => {

            return true;

            /*let object: Gettable = context.getGettable(this.type, this.objectId);
            let property: any = object.getProperty(this.propertyName);

            let value: string = this.value;

            if (typeof property === "string") {
                property = '"' + property + '"';
            }

            let evalStr: string = property + this.operator + value;
            console.log(evalStr);
            return eval(evalStr);*/
        });
    }
}