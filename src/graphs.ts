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
import {Graph} from "./core/graphs/graph.class";
import {TimeTrigger} from "./core/triggers/time-trigger.class";
import {Status} from "./core/common/status.class";

var p4:File = new File("files/sprites/p4-body.png");
var p5:File = new File("files/sprites/p5-body.png");
var p6:File = new File("files/sprites/p6-body.png");
var p7:File = new File("files/sprites/p7-body.png");

var crossControlFile:File = new File("files/controls/cross.png");
var controlAFile:File = new File("files/controls/buttonA.png");

var sprite1:Sprite = new Sprite(p4, 40, 100);
sprite1.displayInDOMElement(document.body);

var sprite2:Sprite = new Sprite(p5, 140, 100);
sprite2.displayInDOMElement(document.body);

var sprite3:Sprite = new Sprite(p6, 140, 200);
sprite3.displayInDOMElement(document.body);

var sprite4:Sprite = new Sprite(p7, 40, 200);
sprite4.displayInDOMElement(document.body);

var topSprite:Sprite = new Sprite(p6, 90, 20);
topSprite.displayInDOMElement(document.body);

var group1:SpritesGroup = new SpritesGroup([sprite1, sprite2, sprite3, sprite4, topSprite]);
var state1:SpritesGroupState = new SpritesGroupState(group1, [sprite1]);
var state2:SpritesGroupState = new SpritesGroupState(group1, [sprite2]);
var state3:SpritesGroupState = new SpritesGroupState(group1, [sprite3]);
var state4:SpritesGroupState = new SpritesGroupState(group1, [sprite4]);
var stateTop:SpritesGroupState = new SpritesGroupState(group1, [topSprite]);

var crossControlSprite:ControlSprite = new ControlSprite(crossControlFile, 350, 100);
crossControlSprite.displayInDOMElement(document.body);

var controlASprite:ControlSprite = new ControlSprite(controlAFile, 480, 110);
controlASprite.displayInDOMElement(document.body);

var crossControlUp:Control = new Control(crossControlSprite);
crossControlUp.setZone(28, 0, 28, 28);
var upTrigger:Trigger = new Trigger(crossControlUp, Events.CONTROL_DOWN);
crossControlUp.enable();

var crossControlDown:Control = new Control(crossControlSprite);
crossControlDown.setZone(28, 57, 28, 28);
var downTrigger:Trigger = new Trigger(crossControlDown, Events.CONTROL_DOWN);
crossControlDown.enable();

var crossControlRight:Control = new Control(crossControlSprite);
crossControlRight.setZone(56, 28, 28, 28);
var rightTrigger:Trigger = new Trigger(crossControlRight, Events.CONTROL_DOWN);
crossControlRight.enable();

var crossControlLeft:Control = new Control(crossControlSprite);
crossControlLeft.setZone(0, 28, 28, 28);
var leftTrigger:Trigger = new Trigger(crossControlLeft, Events.CONTROL_DOWN);
crossControlLeft.enable();

var controlA:Control = new Control(controlASprite);
var ATrigger:Trigger = new Trigger(controlA, Events.CONTROL_DOWN);
controlA.enable();

var timeTrigger:TimeTrigger = new TimeTrigger(0.5);

var node1:GraphNode = new GraphNode(state1);
var node2:GraphNode = new GraphNode(state2);
var node3:GraphNode = new GraphNode(state3);
var node4:GraphNode = new GraphNode(state4);
var nodeTop:GraphNode = new GraphNode(stateTop);

node1.addLink(new GraphLink(node2, rightTrigger));
node1.addLink(new GraphLink(node4, downTrigger));
node1.addLink(new GraphLink(nodeTop, ATrigger));

nodeTop.addLink(new GraphLink(node2, timeTrigger));

node2.addLink(new GraphLink(node3, downTrigger));
node2.addLink(new GraphLink(node1, leftTrigger));

node3.addLink(new GraphLink(node2, upTrigger));
node3.addLink(new GraphLink(node4, leftTrigger));


node4.addLink(new GraphLink(node3, rightTrigger));
node4.addLink(new GraphLink(node1, upTrigger));

var graph:Graph = new Graph([node1, node2, node3, node4]);
graph.setNodeAsCurrent(node1);

sprite4.subscribe(Status.VISIBILITY, (status:string) => {
    //alert (status);
});