/**
 * Created by Christophe on 14/02/2017.
 */
import { EventDispatcher } from "../common/event-dispatcher.class";
import { GraphNode } from "./graph-node.class";
import { ITrigger } from "../interfaces/ITrigger.interface";
export declare class GraphLink extends EventDispatcher {
    destNode: GraphNode;
    trigger: ITrigger;
    constructor(destNode: GraphNode, trigger: ITrigger);
    enableTrigger(callback: Function): void;
    disableTrigger(): void;
}
