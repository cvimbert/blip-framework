/**
 * Created by Christophe on 14/02/2017.
 */
import {EventDispatcher} from "../common/event-dispatcher.class";
import {GraphNode} from "./graph-node.class";
import {ITrigger} from "../interfaces/ITrigger.interface";
import {BaseTrigger} from "core";

export class GraphLink extends EventDispatcher {

    constructor(
        public destNode:GraphNode,
        public trigger:BaseTrigger
    ) {
        super();
    }

    enableTrigger(callback:Function) {
        this.trigger.bind(() => callback(this.destNode));
        this.trigger.enable();
    }

    disableTrigger() {
        this.trigger.unbind();
        this.trigger.disable();
    }
}