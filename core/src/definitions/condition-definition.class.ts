import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {Condition} from "../gamelogic/condition.class";
import {GameUnitObject} from "../global-objects/game-unit-object.class";

export class ConditionDefinition {

    type: string;
    objectId: string;
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

        console.log(this);
    }

    create(context: GameUnitObject): Condition {
        return new Condition(() => {
            return true;
        });
    }
}