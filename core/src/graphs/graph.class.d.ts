/**
 * Created by Christophe on 14/02/2017.
 */
import { EventDispatcher } from "../common/event-dispatcher.class";
import { GraphNode } from "./graph-node.class";
export declare class Graph extends EventDispatcher {
    nodes: GraphNode[];
    private _currentNode;
    constructor(nodes: GraphNode[]);
    hide(): void;
    setCurrentNodeIndex(index?: number): void;
    setNodeAsCurrent(node: GraphNode): void;
}
