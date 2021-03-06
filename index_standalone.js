/**
 * Created by Christophe on 25/01/2018.
 */
var gameData = {
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
        e2el4: { file: "files/game1/details/e2el4.png", x: 574, y: 356 }
    },
    backgrounds: [
        { file: "files/game1/backgrounds/fond.png" }
    ],
    foregrounds: [

    ],
    clocks: {
        mainClock: { period: 0.5 }
    },
    groups: {
        elec1: {
            sprites: ["e1el1", "e1el2", "e1el3", "e1el4"],
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
                        }
                    ]
                }
            },
            animations: {
                an1: {
                    sequence: "s1",
                    period: 0.5,
                    iterations: 1,
                    interruptable: false
                }
            }
        },
        elec2: {
            sprites: ["e2el1", "e2el2", "e2el3", "e2el4"],
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
                        }
                    ]
                }
            },
            animations: {
                an1: {
                    sequence: "s1",
                    period: 0.5,
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

var scene = new Blip.HTMLGameObject(gameData);
scene.displayIn(document.body);

scene.getControl("ctrlA").enable();
scene.getControl("cross_top").enable();
scene.getControl("cross_bottom").enable();
scene.getControl("cross_right").enable();
scene.getControl("cross_left").enable();


var triggersData = {
    triggers: {
        lclick: { type: "controldown", control: "cross_left" },
        rclick: { type: "controldown", control: "cross_right" },
        tclick: { type: "controldown", control: "cross_top" },
        bclick: { type: "controldown", control: "cross_bottom" },
        jump: { type: "controldown", control: "ctrlA"},
        fall: { type: "time", time: 0.5 }
    }
};

var triggers = new Blip.TriggersObject(triggersData, scene);

var mainGraphData = {
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

var mainGraph = new Blip.GraphObject(mainGraphData, triggers, scene);
mainGraph.graph.setCurrentNodeIndex(0);

var elecSeq1 = scene.getSequence("elec1", "s1");
var elecSeq2 = scene.getSequence("elec2", "s1");

elecSeq1.displayAtIndex(0);
elecSeq2.displayAtIndex(0);

var anElec1 = scene.getAnimation("elec1", "an1");
var anElec2 = scene.getAnimation("elec2", "an1");

//var mainClock:Clock = scene.getClock("mainClock");

/*mainClock.listen(Events.CLOCK_PERIOD, () => {

 if (!anElec1.isPlaying) {
 if (Math.random() < 0.1) {
 anElec1.play();
 }
 }

 if (!anElec2.isPlaying) {
 if (Math.random() < 0.1) {
 anElec2.play();
 }
 }
 });*/

anElec1.play();