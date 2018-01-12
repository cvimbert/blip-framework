/**
 * Created by Christophe on 11/01/2018.
 */
import {GraphData} from "./interfaces/graph-data.interface";
import {TriggersObject} from "../triggers/triggers-object.class";
import {GameObject} from "../display/game-object.class";
import {GraphNode} from "./graph-node.class";
import {NodeData} from "./interfaces/graph-data.interface";
import {StateData} from "./interfaces/graph-data.interface";
import {IDisplayable} from "../interfaces/IDisplayable.interface";
import {LinkData} from "./interfaces/graph-data.interface";
import {GraphLink} from "./graph-link.class";
import {BaseTrigger} from "../triggers/base-trigger.class";
import {ITrigger} from "../interfaces/ITrigger.interface";
import {Graph} from "./graph.class";

export class GraphObject {

    private _nodesDictionary:{[key:string]:GraphNode} = {};
    graph:Graph;

    constructor(
        data:GraphData,
        public triggers:TriggersObject,
        public scene:GameObject
    ) {
        this.loadData(data);
    }

    loadData(data:GraphData) {

        let nodesData:{[key:string]:NodeData} = data.nodes;
        let nodeIds:string[] = Object.keys(nodesData);
        let nodes:GraphNode[] = [];

        // on crée d'abord les objets node
        nodeIds.forEach((nodeId:string) => {
            let stateData:StateData = nodesData[nodeId].state;
            let state:IDisplayable;

            if (!stateData.type || stateData.type === "sprite") {
                state = this.scene.getSprite(stateData.ref);
            } else if (stateData.type === "state") {
                // states à faire
            }

            let node:GraphNode = new GraphNode(state);
            this._nodesDictionary[nodeId] = node;
            nodes.push(node);
        });
        
        nodeIds.forEach((nodeId:string) => {
            let linksDatas:LinkData[] = nodesData[nodeId].links;
            let currentNode:GraphNode = this._nodesDictionary[nodeId];
            
            linksDatas.forEach((data:LinkData) => {
                let destNode:GraphNode = this._nodesDictionary[data.node];
                let trigger:ITrigger = this.triggers.getTrigger(data.trigger);
                currentNode.addLink(new GraphLink(destNode, trigger));
            });
        });

        this.graph = new Graph(nodes);
    }
}