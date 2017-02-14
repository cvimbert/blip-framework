/**
 * Created by Christophe on 14/02/2017.
 */
import {EventDispatcher} from "../common/event-dispatcher.class";
import {GraphNode} from "./graph-node.class";
import {ITrigger} from "../interfaces/ITrigger.interface";

export class GraphLink extends EventDispatcher {

    constructor(
        public destNode:GraphNode,
        public trigger:ITrigger
    ) {
        super();
    }

    enableTrigger(callback:Function) {
        this.trigger.enable();

        // TODO: temporary parameters
        this.trigger.bind("temp", () => callback(this.destNode));
    }

    disableTrigger() {
        // TODO: temporary parameters
        this.trigger.unbind("temp");
    }
}