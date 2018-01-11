/**
 * Created by Christophe on 10/01/2018.
 */
import {ControlTrigger} from "./control-trigger.class";
import {ITrigger} from "../../interfaces/ITrigger.interface";
import {Control} from "../../gamelogic/control.class";
import {Events} from "../../common/events.class";

export class ControlDownTrigger extends ControlTrigger implements ITrigger {

    constructor(
        control:Control,
        callback:Function = null
    ) {
        super(control, Events.CONTROL_DOWN, callback);
    }
}