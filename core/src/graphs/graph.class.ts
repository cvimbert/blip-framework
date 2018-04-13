/**
 * Created by Christophe on 14/02/2017.
 */
import {Dispatcher} from "../common/dispatcher.class";
import {GraphNode} from "./graph-node.class";
import {Actionable} from "../script/interfaces/actionable.interface";
import {Gettable} from "../interfaces/gettable.interface";

export class Graph extends Dispatcher implements Actionable, Gettable {
    
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

    setCurrentNodeIndex(index: string | number = 0) {
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
            setTimeout(() => {
                this.setNodeAsCurrent(newNode);
            });

        });
    }

    getNode(id: string) {
        return this.nodes[id];
    }

    executeAction(actionName: string, args: string[]) {
        switch (actionName) {
            case "setnode":
                this.setCurrentNodeIndex(args[0]);
                break;
        }
    }

    getProperty(propertyName: string): any {
        switch (propertyName) {
            case "currentNodeId":
                return this._currentNode.id;

            case "currentNode":
                return this._currentNode;
        }
    }
}