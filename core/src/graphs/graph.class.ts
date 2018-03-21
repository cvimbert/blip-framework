/**
 * Created by Christophe on 14/02/2017.
 */
import {Dispatcher} from "../common/dispatcher.class";
import {GraphNode} from "./graph-node.class";

export class Graph extends Dispatcher {
    
    private _currentNode:GraphNode;

    constructor(
        public nodes:{[key: string]: GraphNode} = null
    ) {
        super();
    }

    hide() {
        for (let id in this.nodes) {
            this.nodes[id].hide();
        }
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

    getNode(id: string) {
        return this.nodes[id];
    }
}