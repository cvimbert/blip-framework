/**
 * Created by Christophe on 01/02/2017.
 */
import {File} from "./core/files/file.class";
import {Sprite} from "./core/display/sprite.class";
import {SpritesGroup} from "./core/display/sprites-group.class";
import {SpritesGroupState} from "./core/display/sprites-group-state.class";
import {Sequence} from "./core/spriteslogic/sequence.class";
import {Animation} from "./core/spriteslogic/animation.class";

function delay(time:number, action:Function) {
    setTimeout(() => action(), time * 1000);
}

// test des File
var body:File = new File("files/o-body.png");
var p4:File = new File("files/p4-body.png");
var p5:File = new File("files/p5-body.png");
var p6:File = new File("files/p6-body.png");
var p7:File = new File("files/p7-body.png");

// test des Sprite
var spriteBody:Sprite = new Sprite(body, 35, 35, 1);
spriteBody.displayInDOMElement(document.body);
var spritep4:Sprite = new Sprite(p4, 35, 200, 1);
spritep4.displayInDOMElement(document.body);
var spritep5:Sprite = new Sprite(p5, 90, 200, 1);
spritep5.displayInDOMElement(document.body);

// test des SpritesGroup
var group1:SpritesGroup = new SpritesGroup([spriteBody, spritep4, spritep5]);
//group1.show();

// test des SpritesGroupState
var state1:SpritesGroupState = new SpritesGroupState(group1, [spritep4, spritep5]);
var state2:SpritesGroupState = new SpritesGroupState(group1, [spriteBody]);
var state3:SpritesGroupState = new SpritesGroupState(group1, [spritep5]);
/*delay(2, () => state1.display());
delay(4, () => state1.hide());
delay(6, () => state1.display());*/

// test des Sequence
var sequence1:Sequence = new Sequence(group1, Sequence.LOOP_TYPE_CIRCLE, [state1, state2, state3]);
/*sequence1.displayNext();
delay(1, () => sequence1.displayNext());
delay(2, () => sequence1.displayNext());
delay(3, () => sequence1.hide());
delay(4, () => {
    sequence1.reset();
    sequence1.displayNext();
});*/

var animation1:Animation = new Animation(sequence1, 3, 1, true);
animation1.play();