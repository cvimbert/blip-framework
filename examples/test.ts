/**
 * Created by Christophe on 20/03/2017.
 */
import {HTMLGameObject} from "../core/src/display/html-game-object.class";
import {Sprite} from "../core/src/display/sprite.class";
import {SpritesGroup} from "../core/src/display/sprites-group.class";
import {SpritesGroupState} from "../core/src/display/sprites-group-state.class";
import {Sequence} from "../core/src/spriteslogic/sequence.class";
import {Control} from "../core/src/gamelogic/control.class";
import {Events} from "../core/src/common/events.class";
import {Sound} from "../core/src/sound/sound.class";
import {SoundObject} from "../core/src/sound/sound-object.class";
import {SoundsData} from "../core/src/sound/interfaces/sounds-data.interface";
import {TriggersData} from "../core/src/triggers/interfaces/triggers-data.interface";
import {TriggersObject} from "../core/src/triggers/triggers-object.class";
import {GraphData} from "../core/src/graphs/interfaces/graph-data.interface";

var gameData:Object = {
    sprites: {
        sp1: { file: "files/sprites/p4-body.png", x: 10, y: 10 },
        sp2: { file: "files/sprites/p5-body.png", x: 70, y: 10 },
        sp3: { file: "files/sprites/p6-body.png", x: 130, y: 10 }
    },
    backgrounds: [
        { file: "files/decorations/background.png" }
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
            },
            offset: { x: 260, y: 190 },
            sequences: {
                seq1: {
                    states: [
                        {
                            type: "sprite",
                            ref: "sp1"
                        },
                        {
                            type: "sprite",
                            ref: "sp2"
                        },
                        {
                            type: "sprite",
                            ref: "sp3"
                        }
                    ],
                    loop: ""
                }
            }
        }
    },
    controls: {
        ctrl1: {
            sprite: { file: "files/controls/buttonA.png", x: 57, y: 302 }
        },
        ctrl2: {
            sprite: { file: "files/controls/buttonB.png", x: 664, y: 302 }
        },
        ctrl3: {
            sprite: {
                file: "files/controls/cross.png",
                x: 40,
                y: 190
            },
            zones: {
                top: { x: 0, y: 0, width: 0, height: 0},
                bottom: {},
                right: {},
                left: {}
            }
        }
    }
};

var soundData:SoundsData = {
    sounds: {
        blip: "files/sounds/blip.mp3",
        dropgold: "files/sounds/dropgold.mp3",
        taken: "files/sounds/taken.mp3"
    }
};

var triggersData:TriggersData = {
    triggers: {
        lclick: { type: "controldown", control: "ctrl1" },
        rclick: { type: "controldown", control: "ctrl2" },
        trg2: { type: "time", time: 1 }
    }
};

var graphData:GraphData = {
    nodes: {
        nd1: {
            state: {
                type: "sprite",
                ref:  "sp1"
            },
            links: [
                {
                    node: "nd2",
                    trigger: "rclick"
                }
            ]
        },
        nd2: {
            state: {
                type: "sprite",
                ref: "sp2"
            },
            links: [
                {
                    node: "nd1",
                    trigger: "lclick"
                },
                {
                    node: "nd3",
                    trigger: "rclick"
                }
            ]
        },
        nd3: {
            state: {
                type: "sprite",
                ref: "sp3"
            },
            links: [
                {
                    node: "nd2",
                    trigger: "lclick"
                }
            ]
        }
    }
};

var scene:HTMLGameObject = new HTMLGameObject(gameData);
scene.displayIn(document.body);

var sounds:SoundObject = new SoundObject(soundData);

var triggers:TriggersObject = new TriggersObject(triggersData, scene);

// Groupes et états
/*var sp1:Sprite = scene.getSprite("sp1");
 sp1.display();

 var g1:SpritesGroup = scene.getGroup("g1");
 g1.display();

 var s2:SpritesGroupState = scene.getState("g1", "s1");
 s2.display();*/


var seq1:Sequence = scene.getSequence("g1", "seq1");
seq1.displayAtIndex(0);

var blip:Sound = sounds.getSound("blip");

var ctrl1:Control = scene.getControl("ctrl1");
ctrl1.enable();
ctrl1.listen(Events.CONTROL_DOWN, () => {
    seq1.displayPrevious(true);
    blip.play();
});

var ctrl2:Control = scene.getControl("ctrl2");
ctrl2.enable();
ctrl2.listen(Events.CONTROL_DOWN, () => {
    seq1.displayNext(true);
    blip.play();
});