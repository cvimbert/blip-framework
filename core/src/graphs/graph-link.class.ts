/**
 * Created by Christophe on 14/02/2017.
 */
import {EventDispatcher} from "../common/event-dispatcher.class";
import {GraphNode} from "./graph-node.class";
import {ITrigger} from "../interfaces/ITrigger.interface";
import {BaseTrigger} from "../triggers/base-trigger.class";
import {EventListener} from "../common/event-listener.class";
import {Events} from "../common/events.class";

export class GraphLink extends EventDispatcher {

    triggerListener:EventListener;

    constructor(
        public destNode:GraphNode,
        public trigger:BaseTrigger
    ) {
        super();
    }

    enableTrigger(callback:Function) {
        //this.trigger.bind(() => callback(this.destNode));
        this.trigger.enable();
        this.triggerListener = this.trigger.listen(Events.TRIGGER_ACTION, () => callback(this.destNode));
    }

    disableTrigger() {
        //this.trigger.unbind();
        this.trigger.disable();
        this.trigger.deleteListener(this.triggerListener);
    }
}