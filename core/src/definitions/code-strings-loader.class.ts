import {TypedObject} from "../../../blp-parser/parse-units/typed-object.class";
import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {GameObjectDefinition} from "./game-object-definition.class";
import {SceneObjectDefinition} from "./scene-object-definition.class";
import {SceneUnitObject} from "../global-objects/scene-unit-object.class";

export class CodeStringsLoader {

    constructor(
        files: string[],
        private targetElement: HTMLElement,
        private onCompleted: Function = null
    ) {
        this.parseCode(files);
    }

    parseCode(files: string[]) {
        let cr: ResultUnit[] = [];

        for (let file of files) {
            let baseUnit: TypedObject = new TypedObject();
            baseUnit.code = file;
            let results: ResultUnit[] = baseUnit.evaluate();
            cr = cr.concat(results);
        }

        let scene: SceneUnitObject;
        let objectsBank: {[key: string]: GameObjectDefinition} = {};

        for (let result of cr) {

            if (result.results["type"] === "instantiable") {
                let definition: GameObjectDefinition = new GameObjectDefinition(result);

                let id: string = result.children[0].results["groupName"];
                objectsBank[id] = definition;
            }
        }

        for (let result of cr) {
            if (result.results["type"] === "scene") {
                let definition: SceneObjectDefinition = new SceneObjectDefinition(result);
                scene = new SceneUnitObject(definition, objectsBank, this.targetElement);
            }
        }

        if (scene) {
            scene.displaySprites();
        }

        console.log(scene);
        this.onCompleted(scene);
    }
}