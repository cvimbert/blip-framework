import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {Script} from "../script/script.class";
import {GameUnitObject} from "../global-objects/game-unit-object.class";
import {SceneUnitObject} from "../global-objects/scene-unit-object.class";

export class ScriptDefinition {

    constructor(
        private result: ResultUnit
    ) {

    }

    create(context: GameUnitObject | SceneUnitObject): Script {
        return new Script(this.result, context);
    }
}