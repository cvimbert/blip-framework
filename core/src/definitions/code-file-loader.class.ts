import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {TypedObject} from "../../../blp-parser/parse-units/typed-object.class";
import {GameObjectDefinition} from "./game-object-definition.class";
import {GameUnitObject} from "../global-objects/game-unit-object.class";
import {SceneObjectDefinition} from "./scene-object-definition.class";
import {SceneUnitObject} from "../global-objects/scene-unit-object.class";

export class CodeFileLoader {

    instanciables: GameObjectDefinition[] = [];

    constructor(
        filePath: string
    ) {
        this.loadFromFile(filePath);
    }

    loadFromFile(filePath: string) {
        let req: XMLHttpRequest = new XMLHttpRequest();

        req.open("GET", filePath, true);

        req.onreadystatechange = () => {
            if (req.readyState === XMLHttpRequest.DONE) {
                if (req.status === 200) {
                    this.parseCode(req.responseText);
                }
            } else {

            }
        };

        req.send();
    }

    parseCode(code: string) {
        let baseUnit: TypedObject = new TypedObject();
        baseUnit.code = code;
        let results: ResultUnit[] = baseUnit.evaluate();

        for (let result of results) {
            if (result.results["type"] === "instantiable") {
                let definition: GameObjectDefinition = new GameObjectDefinition(result);
                this.instanciables.push(definition);
                let obj: GameUnitObject = definition.create();
            }

            if (result.results["type"] === "scene") {
                let definition: SceneObjectDefinition = new SceneObjectDefinition(result);
                let obj: SceneUnitObject = new SceneUnitObject(definition);
                console.log(definition);
            }
        }
    }
}