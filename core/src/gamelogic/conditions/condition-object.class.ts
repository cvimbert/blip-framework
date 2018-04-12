import {ConditionsData} from "./interfaces/conditions-data.interface";
import {Condition} from "../condition.class";
import {DataTemplates} from "../../data-templates.class";
import {GameObject} from "../../display/game-object.class";

export class ConditionObject {

    private _conditionsDictionary:{[key:string]:Condition} = {};

    constructor(
        data:ConditionsData,
        private gameObject:GameObject
    ) {
        this.loadData(data);
    }

    loadData(data:ConditionsData) {

        let conditionKeys:string[] = Object.keys(data.conditions);

        conditionKeys.forEach((key:string) => {

            let elem:string|Object = data.conditions[key];

            if (typeof elem === "string") {
                /*let res:ExtractionResult = DataTemplates.condition.extractResult(elem);
                console.log(key, res);*/
            } else {

            }

        });
    }
}