import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {Condition} from "../gamelogic/condition.class";
import {GameUnitObject} from "../global-objects/game-unit-object.class";
import {Gettable} from "../interfaces/gettable.interface";

export class ConditionDefinition {

    type: string;
    objectId: string;
    propertyName: string;
    operator: string;
    value: string;

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
    }

    create(context: GameUnitObject): Condition {
        return new Condition(() => {
            let object: Gettable = context.getGettable(this.type, this.objectId);
            let property: any = object.getProperty(this.propertyName);

            let evalStr: string = property + this.operator + this.value;
            return eval(evalStr);
        });
    }
}