/**
 * Created by Christophe on 06/03/2017.
 */
import {Sprite} from "./core/display/sprite.class";
import {File} from "./core/files/file.class";
import {Events} from "./core/common/events.class";
import {Control} from "./core/gamelogic/control.class";
import {ControlSprite} from "./core/display/control-sprite.class";
import {SpritesGroup} from "./core/display/sprites-group.class";
import {SpritesGroupState} from "./core/display/sprites-group-state.class";
import {Trigger} from "./core/triggers/trigger.class";
import {GraphNode} from "./core/graphs/graph-node.class";
import {GraphLink} from "./core/graphs/graph-link.class";

var p4:File = new File("files/sprites/p4-body.png");
var p5:File = new File("files/sprites/p5-body.png");
var p6:File = new File("files/sprites/p6-body.png");
var p7:File = new File("files/sprites/p7-body.png");

var crossControlFile:File = new File("files/controls/cross.png");

var sprite1:Sprite = new Sprite(p4, 40, 40);
sprite1.displayInDOMElement(document.body);

var sprite2:Sprite = new Sprite(p5, 40, 140);
sprite2.displayInDOMElement(document.body);

var sprite3:Sprite = new Sprite(p6, 140, 140);
sprite3.displayInDOMElement(document.body);

var sprite4:Sprite = new Sprite(p6, 140, 40);
sprite4.displayInDOMElement(document.body);

var group1:SpritesGroup = new SpritesGroup([sprite1, sprite2, sprite3, sprite4]);
var state1:SpritesGroupState = new SpritesGroupState(group1, [sprite1]);
var state2:SpritesGroupState = new SpritesGroupState(group1, [sprite2]);
var state3:SpritesGroupState = new SpritesGroupState(group1, [sprite3]);
var state4:SpritesGroupState = new SpritesGroupState(group1, [sprite4]);

var crossControlSprite:ControlSprite = new ControlSprite(crossControlFile, 350, 100, 1);
crossControlSprite.displayInDOMElement(document.body);

var crossControlUp:Control = new Control(crossControlSprite, null);
crossControlUp.setZone(28, 0, 28, 28);
var upTrigger:Trigger = new Trigger(crossControlUp, Events.CONTROL_DOWN);

var crossControlDown:Control = new Control(crossControlSprite, null);
crossControlDown.setZone(28, 57, 28, 28);
var downTrigger:Trigger = new Trigger(crossControlDown, Events.CONTROL_DOWN);

var crossControlRight:Control = new Control(crossControlSprite, null);
crossControlRight.setZone(56, 28, 28, 28);
var rightTrigger:Trigger = new Trigger(crossControlRight, Events.CONTROL_DOWN);

var crossControlLeft:Control = new Control(crossControlSprite, null);
crossControlLeft.setZone(0, 28, 28, 28);
var leftTrigger:Trigger = new Trigger(crossControlLeft, Events.CONTROL_DOWN);

var node1:GraphNode = new GraphNode(state1);
node1.addLink(new GraphLink(node2, rightTrigger));
var node2:GraphNode = new GraphNode(state2);
var node3:GraphNode = new GraphNode(state3);
var node4:GraphNode = new GraphNode(state4);

