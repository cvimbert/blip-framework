/**
 * Created by Christophe on 08/01/2018.
 */
import {ControlSprite} from "../core/src/display/control-sprite.class";
import {File} from "../core/src/files/file.class";
import {Control} from "../core/src/gamelogic/control.class";
import {Events} from "../core/src/common/events.class";

var contF1:File = new File("files/controls/buttonA.png");
var contSp1:ControlSprite = new ControlSprite(contF1, 10, 10);
contSp1.displayInDOMElement(document.body);
var cont1:Control = new Control(contSp1);
cont1.enable();

cont1.listen(Events.CONTROL_DOWN, () => {

});

var contF1:File = new File("files/controls/buttonB.png");
var contSp1:ControlSprite = new ControlSprite(contF1, 90, 10);
contSp1.displayInDOMElement(document.body);
var cont2:Control = new Control(contSp1);
cont2.enable();

cont2.listen(Events.CONTROL_DOWN, () => {

});

var crossFile:File = new File("files/controls/cross.png");
var crossSp:ControlSprite = new ControlSprite(crossFile, 10, 100);
crossSp.displayInDOMElement(document.body);
var cross:Control = new Control(crossSp);
cross.setZone(0, 0, 80, 20);
cross.enable();

cross.listen(Events.CONTROL_DOWN, () => {
    
});