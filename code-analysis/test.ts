import {BlpParser} from "../blp-parser/blp-parser.class";
import {CodeStructure} from "../blp-parser/interfaces/assertions.interface";
import {GameObjectDefinition} from "../core/src/definitions/game-object-definition.class";
import {CodeFileLoader} from "../core/src/definitions/code-file-loader.class";
import {SceneObject} from "../core/src/global-objects/scene-object.class";

/*let loader: CodeFileLoader = new CodeFileLoader("../examples/blp/object1.blp");

let scene: SceneObject = new SceneObject();
scene.displayIn(document.body);*/

let sceneLoader: CodeFileLoader = new CodeFileLoader("../examples/blp/scene.blp");