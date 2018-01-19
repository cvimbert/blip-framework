/**
 * Created by Christophe on 18/01/2018.
 */
import {HTMLGameObject} from "../core/src/display/html-game-object.class";
import {GraphData} from "../core/src/graphs/interfaces/graph-data.interface";
import {GraphObject} from "../core/src/graphs/graph-object.class";
import {TriggersData} from "../core/src/triggers/interfaces/triggers-data.interface";
import {TriggersObject} from "../core/src/triggers/triggers-object.class";

var gameData:Object = {
    gameContainerScale: 0.5,
    sprites: {
        r1p1: { file: "files/game1/sprites/r1p1.png", x: 160, y: 1038 },
        r1p2: { file: "files/game1/sprites/r1p2.png", x: 307, y: 1045 },
        r1p3: { file: "files/game1/sprites/r1p3.png", x: 434, y: 1046 },
        r1p4: { file: "files/game1/sprites/r1p4.png", x: 581, y: 1048 },

        e1p1: { file: "files/game1/sprites/e1p1.png", x: 705, y: 1027 },
        e1p2: { file: "files/game1/sprites/e1p2.png", x: 707, y: 818 },

        r2p1: { file: "files/game1/sprites/r2p1.png", x: 710, y: 642 },
        r2p2: { file: "files/game1/sprites/r2p2.png", x: 573, y: 657 },
        r2p3: { file: "files/game1/sprites/r2p3.png", x: 443, y: 650 },
        r2p4: { file: "files/game1/sprites/r2p4.png", x: 323, y: 653 },

        r2p1s: { file: "files/game1/sprites/r2p1s.png", x: 693, y: 555 },
        r2p2s: { file: "files/game1/sprites/r2p2s.png", x: 558, y: 562 },
        r2p3s: { file: "files/game1/sprites/r2p3s.png", x: 433, y: 557 },
        r2p4s: { file: "files/game1/sprites/r2p4s.png", x: 312, y: 567 },

        e2p1: { file: "files/game1/sprites/e2p1.png", x: 189, y: 606 },
        e2p2: { file: "files/game1/sprites/e2p2.png", x: 181, y: 415 },

        r3p1: { file: "files/game1/sprites/r3p1.png", x: 182, y: 238 },
        r3p2: { file: "files/game1/sprites/r3p2.png", x: 325, y: 243 },
        r3p3: { file: "files/game1/sprites/r3p3.png", x: 449, y: 252 },
        r3p4: { file: "files/game1/sprites/r3p4.png", x: 581, y: 251 },

        r3p1s: { file: "files/game1/sprites/r3p1s.png", x: 175, y: 125 },
        r3p2s: { file: "files/game1/sprites/r3p2s.png", x: 320, y: 160 },
        r3p3s: { file: "files/game1/sprites/r3p3s.png", x: 445, y: 155 },
        r3p4s: { file: "files/game1/sprites/r3p4s.png", x: 576, y: 142 }
    },
    backgrounds: [
        { file: "files/game1/backgrounds/fond.png" }
    ],
    foregrounds: [

    ],
    groups: {

    },
    controls: {
        ctrlA: {
            sprite: { file: "files/controls/buttonA.png", x: 855, y: 276 }
        },
        cross: {
            sprite: {
                file: "files/controls/cross.png",
                x: 707,
                y: 266
            },
            zones: {
                top: { x: 30, y: 0, width: 30, height: 30 },
                bottom: { x: 30, y: 60, width: 30, height: 30 },
                right: { x: 60, y: 30, width: 30, height: 30 },
                left: { x: 0, y: 30, width: 30, height: 30 }
            }
        }
    }
};

var scene:HTMLGameObject = new HTMLGameObject(gameData);
scene.displayIn(document.body);

var triggersData:TriggersData = {
    triggers: {
        lclick: { type: "controldown", control: "cross_left" },
        rclick: { type: "controldown", control: "cross_right" },
        tclick: { type: "controldown", control: "cross_top" },
        bclick: { type: "controldown", control: "cross_bottom" },
        fall: { type: "time", time: 1 }
    }
};

var triggers:TriggersObject = new TriggersObject(triggersData, scene);

var mainGraphData:GraphData = {
    nodes: {
        nd1: "sp1;rclick->nd2,lclick->nd3"
    }
};

var mainGraph:GraphObject = new GraphObject(mainGraphData, triggers, scene);