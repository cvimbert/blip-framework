import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {TypedObject} from "../../../blp-parser/parse-units/typed-object.class";
import {GameObjectDefinition} from "./game-object-definition.class";
import {GameUnitObject} from "../global-objects/game-unit-object.class";
import {SceneObjectDefinition} from "./scene-object-definition.class";
import {SceneUnitObject} from "../global-objects/scene-unit-object.class";

export class CodeFileLoader {

    constructor(
        filePath: string,
        private onCompleted: Function = null,
        private onError: Function = null
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
        console.log(results);

        let scene: SceneUnitObject;
        let objectsBank: {[key: string]: GameObjectDefinition} = {};

        for (let result of results) {

            if (result.results["type"] === "instantiable") {
                let definition: GameObjectDefinition = new GameObjectDefinition(result);

                let id: string = result.children[0].results["groupName"];
                objectsBank[id] = definition;
            }
        }

        for (let result of results) {
            if (result.results["type"] === "scene") {
                let definition: SceneObjectDefinition = new SceneObjectDefinition(result);
                scene = new SceneUnitObject(definition, objectsBank);
            }
        }

        scene.displaySprites();

        console.log(scene);
        this.onCompleted(scene);
    }
}