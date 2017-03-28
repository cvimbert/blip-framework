/**
 * Created by Christophe on 20/03/2017.
 */
import {HTMLGameScene} from "../core/src/display/html-game-scene.class";

var scene:HTMLGameScene = new HTMLGameScene();
scene.displayInDOMElement(document.body);
scene.loadSprites({
    "sp1": {file: "files/sprites/p4-body.png", x: 10, y:10},
    "sp2": {file: "files/sprites/p5-body.png", x: 70, y:10}
});