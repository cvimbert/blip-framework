/**
 * Created by Christophe on 18/01/2018.
 */
import {HTMLGameObject} from "../core/src/display/html-game-object.class";
import {GraphData} from "../core/src/graphs/interfaces/graph-data.interface";
import {GraphObject} from "../core/src/graphs/graph-object.class";
import {TriggersData} from "../core/src/triggers/interfaces/triggers-data.interface";
import {TriggersObject} from "../core/src/triggers/triggers-object.class";
import {Control} from "../core/src/gamelogic/control.class";
import {Sequence} from "../core/src/spriteslogic/sequence.class";
import {Animation} from "../core/src/spriteslogic/animation.class";
import {Clock} from "../core/src/gamelogic/clock.class";
import {Events} from "../core/src/common/events.class";
import {GameObjectDefinitionData} from "../core/src/display/interfaces/game-object-definition-data.interface";
import {StatesCollisionTrigger} from "../core/src/triggers/sprites/states-collision-trigger.class";

let gameData:Object = {
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
        r3p4s: { file: "files/game1/sprites/r3p4s.png", x: 576, y: 142 },

        e1el1: { file: "files/game1/details/e1el1.png", x: 574, y: 756 },
        e1el2: { file: "files/game1/details/e1el2.png", x: 448, y: 756 },
        e1el3: { file: "files/game1/details/e1el3.png", x: 318, y: 754 },
        e1el4: { file: "files/game1/details/e1el4.png", x: 188, y: 752 },

        e2el1: { file: "files/game1/details/e2el1.png", x: 188, y: 352 },
        e2el2: { file: "files/game1/details/e2el2.png", x: 324, y: 356 },
        e2el3: { file: "files/game1/details/e2el3.png", x: 442, y: 358 },
        e2el4: { file: "files/game1/details/e2el4.png", x: 574, y: 356 },

        ondes1e1: { file: "files/game1/details/ondes1.png", x:45, y:695 },
        ondes2e1: { file: "files/game1/details/ondes2.png", x:86, y:704 },
        ondes3e1: { file: "files/game1/details/ondes3.png", x:118, y:720 },
        ondes4e1: { file: "files/game1/details/ondes4.png", x:148, y:726 },

        ondes1e2: { file: "files/game1/details/ondes1.png", x:42, y:301 },
        ondes2e2: { file: "files/game1/details/ondes2.png", x:80, y:308 },
        ondes3e2: { file: "files/game1/details/ondes3.png", x:114, y:326 },
        ondes4e2: { file: "files/game1/details/ondes4.png", x:142, y:332 }
    },
    backgrounds: [
        { file: "files/game1/backgrounds/fond.png" }
    ],
    foregrounds: [

    ],
    clocks: {
        mainClock: { period: 0.3 }
    },
    groups: {
        ondes1: {
            sprites: ["ondes1e1", "ondes2e1", "ondes3e1", "ondes4e1"],
            states: {
                s1: ["ondes1e1"],
                s2: ["ondes1e1", "ondes2e1"],
                s3: ["ondes1e1", "ondes2e1", "ondes3e1"],
                s4: ["ondes1e1", "ondes2e1", "ondes3e1", "ondes4e1"],
                s5: []
            },
            sequences: {
                seq1: {
                    states: [
                        {
                            type: "state",
                            ref: "s1"
                        },
                        {
                            type: "state",
                            ref: "s2"
                        },
                        {
                            type: "state",
                            ref: "s3"
                        },
                        {
                            type: "state",
                            ref: "s4"
                        },
                        {
                            type: "state",
                            ref: "s5"
                        }
                    ]
                }
            },
            animations: {
                "an1": {
                    sequence: "seq1",
                    period: 0.3
                }
            }
        },
        elec1: {
            sprites: ["e1el1", "e1el2", "e1el3", "e1el4"],
            states: {
                empty: []
            },
            sequences: {
                s1: {
                    states: [
                        {
                            type: "sprite",
                            ref: "e1el4"
                        },
                        {
                            type: "sprite",
                            ref: "e1el3"
                        },
                        {
                            type: "sprite",
                            ref: "e1el2"
                        },
                        {
                            type: "sprite",
                            ref: "e1el1"
                        },
                        {
                            type: "state",
                            ref: "empty"
                        }
                    ]
                }
            },
            animations: {
                an1: {
                    sequence: "s1",
                    period: 0.3,
                    iterations: 1,
                    interruptable: false
                }
            }
        },
        elec2: {
            sprites: ["e2el1", "e2el2", "e2el3", "e2el4"],
            states: {
                empty: []
            },
            sequences: {
                s1: {
                    states: [
                        {
                            type: "sprite",
                            ref: "e2el1"
                        },
                        {
                            type: "sprite",
                            ref: "e2el2"
                        },
                        {
                            type: "sprite",
                            ref: "e2el3"
                        },
                        {
                            type: "sprite",
                            ref: "e2el4"
                        },
                        {
                            type: "state",
                            ref: "empty"
                        }
                    ]
                }
            },
            animations: {
                an1: {
                    sequence: "s1",
                    period: 0.3,
                    iterations: 1,
                    interruptable: false
                }
            }
        }
    },
    controls: {
        ctrlA: {
            sprite: { file: "files/controls/buttonA.png", x: 855, y: 276 },
            key: "a"
        },
        cross: {
            sprite: {
                file: "files/controls/cross.png",
                x: 707,
                y: 266
            },
            zones: {
                top: { x: 30, y: 0, width: 30, height: 30, key: "ArrowUp" },
                bottom: { x: 30, y: 60, width: 30, height: 30, key: "ArrowDown" },
                right: { x: 60, y: 30, width: 30, height: 30, key: "ArrowRight" },
                left: { x: 0, y: 30, width: 30, height: 30, key: "ArrowLeft" }
            }
        }
    }
};

let scene:HTMLGameObject = new HTMLGameObject(gameData);
scene.displayIn(document.body);

scene.getControl("ctrlA").enable();
scene.getControl("cross_top").enable();
scene.getControl("cross_bottom").enable();
scene.getControl("cross_right").enable();
scene.getControl("cross_left").enable();


let triggersData:TriggersData = {
    triggers: {
        lclick: { type: "controldown", control: "cross_left" },
        rclick: { type: "controldown", control: "cross_right" },
        tclick: { type: "controldown", control: "cross_top" },
        bclick: { type: "controldown", control: "cross_bottom" },
        jump: { type: "controldown", control: "ctrlA"},
        fall: { type: "time", time: 0.5 }
    }
};

let triggers:TriggersObject = new TriggersObject(triggersData, scene);

let mainGraphData:GraphData = {
    nodes: {
        nr1p1: "r1p1;rclick->nr1p2",
        nr1p2: "r1p2;rclick->nr1p3,lclick->nr1p1",
        nr1p3: "r1p3;rclick->nr1p4,lclick->nr1p2",
        nr1p4: "r1p4;lclick->nr1p3,rclick->ne1p1",
        ne1p1: "e1p1;lclick->nr1p4,tclick->ne1p2",
        ne1p2: "e1p2;bclick->ne1p1,tclick->nr2p1",

        nr2p1: "r2p1;bclick->ne1p2,lclick->nr2p2,jump->nr2p1s",
        nr2p1s: "r2p1s;fall->nr2p1",

        nr2p2: "r2p2;rclick->nr2p1,lclick->nr2p3,jump->nr2p2s",
        nr2p2s: "r2p2s;fall->nr2p2",

        nr2p3: "r2p3;rclick->nr2p2,lclick->nr2p4,jump->nr2p3s",
        nr2p3s: "r2p3s;fall->nr2p3",

        nr2p4: "r2p4;rclick->nr2p3,jump->nr2p4s,lclick->ne2p1",
        nr2p4s: "r2p4s;fall->nr2p4",

        ne2p1: "e2p1;rclick->nr2p4,tclick->ne2p2",
        ne2p2: "e2p2;bclick->ne2p1,tclick->nr3p1",

        nr3p1: "r3p1;bclick->ne2p2,rclick->nr3p2,jump->nr3p1s",
        nr3p1s: "r3p1s;fall->nr3p1",

        nr3p2: "r3p2;rclick->nr3p3,lclick->nr3p1,jump->nr3p2s",
        nr3p2s: "r3p2s;fall->nr3p2",

        nr3p3: "r3p3;rclick->nr3p4,lclick->nr3p2,jump->nr3p3s",
        nr3p3s: "r3p3s;fall->nr3p3",

        nr3p4: "r3p4;lclick->nr3p3,jump->nr3p4s",
        nr3p4s: "r3p4s;fall->nr3p4"
    }
};

let mainGraph:GraphObject = new GraphObject(mainGraphData, triggers, scene);
mainGraph.graph.setCurrentNodeIndex(0);

let elecSeq1:Sequence = scene.getSequence("elec1", "s1");
let elecSeq2:Sequence = scene.getSequence("elec2", "s1");

let anElec1:Animation = scene.getAnimation("elec1", "an1");
let anElec2:Animation = scene.getAnimation("elec2", "an1");

let mainClock:Clock = scene.getClock("mainClock");
mainClock.start();

mainClock.listen(Events.CLOCK_PERIOD, () => {

    if (!anElec1.isPlaying) {
        if (Math.random() < 0.4) {
            anElec1.play();
        }
    }

    if (!anElec2.isPlaying) {
        if (Math.random() < 0.4) {
            anElec2.play();
        }
    }
});

let animOndes1:Animation = scene.getAnimation("ondes1", "an1");
animOndes1.play();

let def:GameObjectDefinitionData = {
    groups: {
        g1: {
            sequences: {
                seq1: {
                    states: [
                        {
                            type: "state",
                            ref: "ok"
                        }
                    ]
                }
            }
        }
    }
};

let collisionTrigger:StatesCollisionTrigger = new StatesCollisionTrigger(
    scene.getSprite("e1el1"),
    scene.getSprite("r2p2")
);

collisionTrigger.listen(Events.TRIGGER_ACTION, () => {
    console.log("collision");
});

collisionTrigger.enable();