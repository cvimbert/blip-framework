import {CodeFileLoader} from "../core/src/definitions/code-file-loader.class";
import {SceneUnitObject} from "../core/src/global-objects/scene-unit-object.class";
import {GameUnitObject} from "../core/src/global-objects/game-unit-object.class";
import {Control} from "../core/src/gamelogic/control.class";
import {Sequence} from "../core/src/spriteslogic/sequence.class";
import {ExtendedSpritesGroup} from "../core/src/display/extended-sprites-group.class";
import {Events} from "../core/src/common/events.class";
import {Graph} from "../core/src/graphs/graph.class";
import {Animation} from "../core/src/spriteslogic/animation.class";

let sceneLoader: CodeFileLoader = new CodeFileLoader("../examples/blp/scene2.blp", (scene: SceneUnitObject) => {
    // completed

}, () => {
    // error
});