/**
 * Created by Christophe on 14/02/2017.
 */
import {EventDispatcher} from "../common/event-dispatcher.class";
import {GraphNode} from "./graph-node.class";

export class Graph extends EventDispatcher {
    
    private _currentNode:GraphNode;

    constructor(
        public nodes:GraphNode[]
    ) {
        super();
    }

    hide() {
        this.nodes.forEach(node => node.hide());
    }

    setCurrentNodeIndex(index:number = 0) {
        this.setNodeAsCurrent(this.nodes[index]);
    }

    setNodeAsCurrent(node:GraphNode) {

        if (this._currentNode) {
            this._currentNode.disable();
        }

        this._currentNode = node;
        this.hide();
        node.display();

        node.enable((newNode:GraphNode) => {
            // callback de changement de noeud
            this.setNodeAsCurrent(newNode);
        });
    }
}