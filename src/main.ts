/**
 * Created by Christophe on 01/02/2017.
 */
import {File} from "./core/files/file.class";
import {Sprite} from "./core/display/sprite.class";
import {SpritesGroup} from "./core/display/sprites-group.class";
import {SpritesGroupState} from "./core/display/sprites-group-state.class";
import {Sequence} from "./core/spriteslogic/sequence.class";
import {Animation} from "./core/spriteslogic/animation.class";
import {ControlSprite} from "./core/display/control-sprite.class";
import {Control} from "./core/gamelogic/control.class";
import {Events} from "./core/common/events.class";
import {Clock} from "./core/gamelogic/clock.class";
import {Seg7Displayer} from "./modules/lcd-displayer/seg7-displayer";
import {Variable} from "./core/gamelogic/variable.class";
import {LcdDisplayer} from "./modules/lcd-displayer/lcd-displayer.class";

function delay(time:number, action:Function) {
    setTimeout(() => action(), time * 1000);
}

var mainClock:Clock = new Clock(0.6);
//mainClock.start();

// test des File
var body:File = new File("files/sprites/o-body.png");
var p4:File = new File("files/sprites/p4-body.png");
var p5:File = new File("files/sprites/p5-body.png");
var p6:File = new File("files/sprites/p6-body.png");
var p7:File = new File("files/sprites/p7-body.png");

var controlAFile:File = new File("files/controls/buttonA.png");
var controlBFile:File = new File("files/controls/buttonB.png");

// test des Sprite
var spriteBody:Sprite = new Sprite(body, 35, 35, 1);
spriteBody.displayInDOMElement(document.body);
var spritep4:Sprite = new Sprite(p4, 35, 200, 1);
spritep4.displayInDOMElement(document.body);
var spritep5:Sprite = new Sprite(p5, 90, 200, 1);
spritep5.displayInDOMElement(document.body);
var spritep6:Sprite = new Sprite(p6, 145, 200, 1);
spritep6.displayInDOMElement(document.body);

var spriteControlA:ControlSprite = new ControlSprite(controlAFile, 35, 300, 1);
spriteControlA.displayInDOMElement(document.body);
var spriteControlB:ControlSprite = new ControlSprite(controlBFile, 150, 300, 1);
spriteControlB.displayInDOMElement(document.body);

var controlA:Control = new Control(spriteControlA);
controlA.enable();
//controlA.setZone(0, 0, 15, 15);
//controlA.on(Events.CONTROL_DOWN, () => alert ("control A"));

var controlB:Control = new Control(spriteControlB);
controlB.enable();
//controlB.on(Events.CONTROL_DOWN, () => alert ("control B"));

// test des SpritesGroup
var group1:SpritesGroup = new SpritesGroup([spritep4, spritep5, spritep6]);
//group1.show();

// test des SpritesGroupState
var state1:SpritesGroupState = new SpritesGroupState(group1, [spritep4]);
var state2:SpritesGroupState = new SpritesGroupState(group1, [spritep5]);
var state3:SpritesGroupState = new SpritesGroupState(group1, [spritep6]);
/*delay(2, () => state1.display());
delay(4, () => state1.hide());
delay(6, () => state1.display());*/

// test des Sequence
var sequence1:Sequence = new Sequence(group1, [state1, state2, state3]);
/*sequence1.displayNext();
delay(1, () => sequence1.displayNext());
delay(2, () => sequence1.displayNext());
delay(3, () => sequence1.hide());
delay(4, () => {
    sequence1.reset();
    sequence1.displayNext();
});*/

var animation1:Animation = new Animation(sequence1, 3, 1);
//animation1.play();

controlA.on(Events.CONTROL_DOWN, () => sequence1.displayPrevious());
controlB.on(Events.CONTROL_DOWN, () => sequence1.displayNext());

//mainClock.on(Events.CLOCK_PERIOD, () => sequence1.displayNext());

var var1:Variable = new Variable(Variable.NUMBER_TYPE, 6);

var lcdDisplay:Seg7Displayer = new Seg7Displayer(30, 30, 1, var1);
lcdDisplay.displayInDOMElement(document.body);

var dd:LcdDisplayer = new LcdDisplayer(67, 500, 3);
dd.displayInDOMElement(document.body);
dd.value = 783;

controlB.on(Events.CONTROL_DOWN, () => dd.value++);