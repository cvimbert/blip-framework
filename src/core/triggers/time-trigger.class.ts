/**
 * Created by Christophe on 07/03/2017.
 */
import {Trigger} from "./trigger.class";
import {EventDispatcher} from "../common/event-dispatcher.class";

export class TimeTrigger extends Trigger {

    constructor(
        dispatcher:EventDispatcher,
        eventName:string,
        callback:Function = null,
        argument:any = null
    ) {
        super(dispatcher, eventName, callback, argument);
    }
}