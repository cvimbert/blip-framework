import {ResultUnit} from "../../../../../blp-parser/result-unit.class";
import {Gettable} from "../../../interfaces/gettable.interface";
import {GameUnitObject} from "../../../global-objects/game-unit-object.class";

export class LogicalExpression {

    constructor(
        public operand1: ResultUnit,
        public operator: string,
        public operand2: ResultUnit
    ) {

    }

    evaluate(context: GameUnitObject): boolean {
        let op1: string = this.getValueFromResultUnit(this.operand1, context);
        let op2: string = this.getValueFromResultUnit(this.operand2, context);

        let evaluation: string = op1 + this.operator + op2;

        return eval(evaluation);
    }

    getValueFromResultUnit(result: ResultUnit, context: GameUnitObject): string {
        switch (result.type) {
            case "selector":
                let value: any = context.getGettable(this.operand1.results["objectType"], this.operand1.results["objectId"]);

                let propertiesResults: ResultUnit[] = this.operand1.getResult("selectorProperties");
                let propertyRes: ResultUnit = propertiesResults.length > 0 ? propertiesResults[0] : null;

                while (propertyRes) {
                    let propertyName: string = propertyRes.results["propertyName"] ? propertyRes.results["propertyName"] : "";
                    value = value.getProperty(propertyName);

                    propertiesResults = propertiesResults[0].getResult("selectorProperties");
                    propertyRes = propertiesResults.length > 0 ? propertiesResults[0] : null;
                }

                return typeof value === "string" ? "'" + value + "'" : value;

            case "string":
                return "'" + result.results["value"] + "'";

            case "boolean":
            case "number":
                return result.results["value"];
        }
    }
}