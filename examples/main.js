"use strict";
/**
 * Created by Christophe on 01/02/2017.
 */
var file_class_1 = require("../src/core/files/file.class");
var sprite_class_1 = require("../src/core/display/sprite.class");
var sprites_group_class_1 = require("../src/core/display/sprites-group.class");
var sprites_group_state_class_1 = require("../src/core/display/sprites-group-state.class");
var sequence_class_1 = require("../src/core/spriteslogic/sequence.class");
var animation_class_1 = require("../src/core/spriteslogic/animation.class");
var control_sprite_class_1 = require("../src/core/display/control-sprite.class");
var control_class_1 = require("../src/core/gamelogic/control.class");
var events_class_1 = require("../src/core/common/events.class");
var clock_class_1 = require("../src/core/gamelogic/clock.class");
var seg7_displayer_class_1 = require("../src/modules/lcd-displayer/seg7-displayer.class");
var variable_class_1 = require("../src/core/gamelogic/variable.class");
var lcd_displayer_class_1 = require("../src/modules/lcd-displayer/lcd-displayer.class");
var trigger_class_1 = require("../src/core/triggers/trigger.class");
var sound_class_1 = require("../src/core/sound/sound.class");
function delay(time, action) {
    setTimeout(function () { return action(); }, time * 1000);
}
var mainClock = new clock_class_1.Clock(0.6);
//mainClock.start();
// test des File
var body = new file_class_1.File("files/sprites/o-body.png");
var p4 = new file_class_1.File("files/sprites/p4-body.png");
var p5 = new file_class_1.File("files/sprites/p5-body.png");
var p6 = new file_class_1.File("files/sprites/p6-body.png");
var p7 = new file_class_1.File("files/sprites/p7-body.png");
var soundFile1 = new file_class_1.File("files/sounds/blip.mp3");
var soundFile2 = new file_class_1.File("files/sounds/end.mp3");
var sound1 = new sound_class_1.Sound(soundFile1);
var sound2 = new sound_class_1.Sound(soundFile2);
var controlAFile = new file_class_1.File("files/controls/buttonA.png");
var controlBFile = new file_class_1.File("files/controls/buttonB.png");
var crossControlFile = new file_class_1.File("files/controls/cross.png");
// test des Sprite
var spriteBody = new sprite_class_1.Sprite(body, 35, 35, 1);
spriteBody.displayInDOMElement(document.body);
var spritep4 = new sprite_class_1.Sprite(p4, 35, 200, 1);
spritep4.displayInDOMElement(document.body);
var spritep5 = new sprite_class_1.Sprite(p5, 90, 200, 1);
spritep5.displayInDOMElement(document.body);
var spritep6 = new sprite_class_1.Sprite(p6, 145, 200, 1);
spritep6.displayInDOMElement(document.body);
var spriteControlA = new control_sprite_class_1.ControlSprite(controlAFile, 35, 300, 1);
spriteControlA.displayInDOMElement(document.body);
var spriteControlB = new control_sprite_class_1.ControlSprite(controlBFile, 150, 300, 1);
spriteControlB.displayInDOMElement(document.body);
var crossControlSprite = new control_sprite_class_1.ControlSprite(crossControlFile, 350, 100, 1);
crossControlSprite.displayInDOMElement(document.body);
var crossControlUp = new control_class_1.Control(crossControlSprite, null);
crossControlUp.setZone(28, 0, 28, 28);
crossControlUp.listen(events_class_1.Events.CONTROL_DOWN, function () { return console.log("up"); });
crossControlUp.enable();
var crossControlDown = new control_class_1.Control(crossControlSprite, null);
crossControlDown.setZone(28, 57, 28, 28);
crossControlDown.listen(events_class_1.Events.CONTROL_DOWN, function () { return console.log("down"); });
crossControlDown.enable();
var crossControlRight = new control_class_1.Control(crossControlSprite, null);
crossControlRight.setZone(56, 28, 28, 28);
crossControlRight.listen(events_class_1.Events.CONTROL_DOWN, function () { return console.log("right"); });
crossControlRight.enable();
var crossControlLeft = new control_class_1.Control(crossControlSprite, null);
crossControlLeft.setZone(0, 28, 28, 28);
crossControlLeft.listen(events_class_1.Events.CONTROL_DOWN, function () { return console.log("left"); });
crossControlLeft.enable();
//crossControlUp.disable();
var controlA = new control_class_1.Control(spriteControlA);
controlA.enable();
//controlA.setZone(0, 0, 15, 15);
//controlA.on(Events.CONTROL_DOWN, () => alert ("control A"));
var controlB = new control_class_1.Control(spriteControlB);
controlB.enable();
//controlB.on(Events.CONTROL_DOWN, () => alert ("control B"));
// test des SpritesGroup
var group1 = new sprites_group_class_1.SpritesGroup([spritep4, spritep5, spritep6]);
//group1.show();
// test des SpritesGroupState
var state1 = new sprites_group_state_class_1.SpritesGroupState(group1, [spritep4]);
var state2 = new sprites_group_state_class_1.SpritesGroupState(group1, [spritep5]);
var state3 = new sprites_group_state_class_1.SpritesGroupState(group1, [spritep6]);
/*delay(2, () => state1.display());
delay(4, () => state1.hide());
delay(6, () => state1.display());*/
// test des Sequence
var sequence1 = new sequence_class_1.Sequence(group1, [state1, state2, state3]);
/*sequence1.displayNext();
delay(1, () => sequence1.displayNext());
delay(2, () => sequence1.displayNext());
delay(3, () => sequence1.hide());
delay(4, () => {
    sequence1.reset();
    sequence1.displayNext();
});*/
var animation1 = new animation_class_1.Animation(sequence1, 1, 1);
//animation1.play();
controlA.listen(events_class_1.Events.CONTROL_DOWN, function () { return sound1.play(); });
controlB.listen(events_class_1.Events.CONTROL_DOWN, function () { return sequence1.displayNext(); });
//mainClock.on(Events.CLOCK_PERIOD, () => sequence1.displayNext());
var var1 = new variable_class_1.Variable(variable_class_1.Variable.NUMBER_TYPE, 6);
var lcdDisplay = new seg7_displayer_class_1.Seg7Displayer(30, 30, 1, var1);
lcdDisplay.displayInDOMElement(document.body);
var dd = new lcd_displayer_class_1.LcdDisplayer(67, 500, 5);
dd.displayInDOMElement(document.body);
dd.value = 67549;
controlB.listen(events_class_1.Events.CONTROL_DOWN, function () { return animation1.play(); });
var trigger1 = new trigger_class_1.Trigger(animation1, events_class_1.Events.ANIMATION_END, function () { return alert("ok"); });
trigger1.enable();
//# sourceMappingURL=main.js.map