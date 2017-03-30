/**
 * Created by Christophe on 20/03/2017.
 */
import {HTMLGameScene} from "../core/src/display/html-game-scene.class";
import {Sprite} from "../core/src/display/sprite.class";
import {SpritesGroup} from "../core/src/display/sprites-group.class";
import {SpritesGroupState} from "../core/src/display/sprites-group-state.class";

var gameData:Object = {
    sprites: {
        sp1: {file: "files/sprites/p4-body.png", x: 10, y: 10},
        sp2: {file: "files/sprites/p5-body.png", x: 70, y: 10},
        sp3: {file: "files/sprites/p6-body.png", x: 130, y: 10}
    },
    backgrounds: [
        //{file: "files/decorations/background.png"}
    ],
    foregrounds: [

    ],
    groups: {
        g1: {
            sprites: ["sp1", "sp2", "sp3"],
            states: {
                s1: ["sp1", "sp3"],
                s2: ["sp2"],
                s3: []
            }
        }
    }
};

var scene:HTMLGameScene = new HTMLGameScene(gameData);
scene.displayIn(document.body);

var sp1:Sprite = scene.getSprite("sp1");
//sp1.display();

var g1:SpritesGroup = scene.getGroup("g1");
//g1.display();

var s2:SpritesGroupState = scene.getState("g1", "s1");
s2.display();