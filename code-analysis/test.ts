import {CodeFileLoader} from "../core/src/definitions/code-file-loader.class";
import {SceneUnitObject} from "../core/src/global-objects/scene-unit-object.class";
import {GameUnitObject} from "../core/src/global-objects/game-unit-object.class";
import {Control} from "../core/src/gamelogic/control.class";
import {Sequence} from "../core/src/spriteslogic/sequence.class";
import {ExtendedSpritesGroup} from "../core/src/display/extended-sprites-group.class";
import {Events} from "../core/src/common/events.class";
import {Graph} from "../core/src/graphs/graph.class";
import {Animation} from "../core/src/spriteslogic/animation.class";

let sceneLoader: CodeFileLoader = new CodeFileLoader("../examples/blp/scene.blp", (scene: SceneUnitObject) => {
    // completed
    let obj1: GameUnitObject = scene.getObject("perso");
    let obj2: GameUnitObject = scene.getObject("elec1");
    let obj3: GameUnitObject = scene.getObject("elec2");



    obj2.getClock("main").start();
    obj3.getClock("main").start();

    scene.getObject("ondes1").getAnimation("an1").play();
    scene.getObject("ondes2").getAnimation("an1").play();

    let an: Animation = obj2.getAnimation("an1");
    an.play();

    let an2: Animation = obj3.getAnimation("an1");
    an2.play();

    let rightControl: Control = scene.getControl("cross_right");
    let leftControl: Control = scene.getControl("cross_left");
    let topControl: Control = scene.getControl("cross_top");
    let bottomControl: Control = scene.getControl("cross_bottom");
    let ctrlA: Control = scene.getControl("ctrlA");

    let graphPerso: Graph = obj1.getGraph("gr1");

    graphPerso.setCurrentNodeIndex("nr1p1");

    rightControl.enable();
    leftControl.enable();
    topControl.enable();
    bottomControl.enable();
    ctrlA.enable();

}, () => {
    // error
});