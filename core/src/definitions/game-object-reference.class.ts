import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {GameUnitObject} from "../global-objects/game-unit-object.class";
import {SceneUnitObject} from "../global-objects/scene-unit-object.class";
import {GameObjectDefinition} from "./game-object-definition.class";

export class GameObjectReference {

    x: number = 0;
    y: number = 0;
    objectId: string;

    constructor(
        definition: ResultUnit
    ) {
        this.objectId = definition.children[0].results["value"];
        this.x = +definition.children[1].results["value"];
        this.y = +definition.children[2].results["value"];
    }

    create(objectsBank: {[key: string]: GameObjectDefinition}, parent: GameUnitObject | SceneUnitObject): GameUnitObject {
        let obj: GameUnitObject = new GameUnitObject(objectsBank[this.objectId], objectsBank, parent, this.x, this.y);
        obj.objectsBank = objectsBank;
        return obj;
    }
}