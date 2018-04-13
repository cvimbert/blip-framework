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
import {RevertedTemplate} from "reverted-template";
import {DataTemplates} from "../data-templates.class";

export class GraphObject {

    graph:Graph;

    private _nodesDictionary:{[key:string]:GraphNode} = {};

    constructor(
        data:GraphData,
        public triggers:TriggersObject,
        public scene:GameObject
    ) {
        this.loadData(data);
    }

    getDataFromTextFormat(str:string):NodeData {

        let data:Object = DataTemplates.graphNode.extract(str);

        let nodeType:string = "sprite";

        let links:LinkData[] = [];

        data[1].forEach((linkData:Object) => {
            let data:LinkData = {
                node: linkData["$nodeId"],
                trigger: linkData["$triggerId"]
            };

            links.push(data);
        });

        let value:NodeData = {
            state: {
                type: nodeType,
                ref: data[0]["$spriteId"]
            },
            links: links
        };
        
        return value;
    }

    loadData(data:GraphData) {

        let nodesData:{[key:string]:any} = data.nodes;
        let nodeIds:string[] = Object.keys(nodesData);
        let nodes:{[key: string]: GraphNode} = {};


        // on crée d'abord les objets node
        nodeIds.forEach((nodeId:string) => {

            let state:IDisplayable;
            let nodeData:NodeData;

            if (nodesData[nodeId].state) {
                // mode normal
                nodeData = nodesData[nodeId];
            } else if (typeof nodesData[nodeId] === "string") {
                // mode abrégé
                nodeData = this.getDataFromTextFormat(nodesData[nodeId])
            }

            let stateData:StateData = nodeData.state;

            if (!stateData.type || stateData.type === "sprite") {
                state = this.scene.getSprite(stateData.ref);
            } else if (stateData.type === "state") {
                // states à faire
            }

            let node:GraphNode = new GraphNode(state);
            this._nodesDictionary[nodeId] = node;
            nodes[nodeId] = node;
        });

        nodeIds.forEach((nodeId:string) => {
            let nodeData:NodeData;

            if (nodesData[nodeId].state) {
                // mode normal
                nodeData = nodesData[nodeId];
            } else if (typeof nodesData[nodeId] === "string") {
                // mode abrégé
                nodeData = this.getDataFromTextFormat(nodesData[nodeId])
            }

            let linksDatas:LinkData[] = nodeData.links;
            let currentNode:GraphNode = this._nodesDictionary[nodeId];

            linksDatas.forEach((data:LinkData) => {
                let destNode:GraphNode = this._nodesDictionary[data.node];
                let trigger:BaseTrigger = this.triggers.getTrigger(data.trigger);
                //currentNode.addLink(new GraphLink(destNode, trigger));
            });
        });

        this.graph = new Graph(nodes);
    }
}
