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
        //this.loadData(data);
        
        var str:string = "sp1;rclick->nd2,lclick->nd3";

        console.log(this.getDataFromTextFormat(str));
    }
    
    getDataFromTextFormat(str:string):NodeData {

        let nodeId:string;
        let nodeType:string = "sprite";

        let splt:string[] = str.split(";");
        let nodeStr:string = splt[0];
        let linksStr:string = splt[1];

        if (nodeStr.indexOf("(") === -1) {
            nodeId = nodeStr;
        } else {
            let nodesSub:string[] = nodeStr.split("(");
            nodeType = nodesSub[0];
            nodeId = nodesSub[1].split(")")[0];
        }

        let linksList:string[] = linksStr.split(",");

        
        let value:NodeData = {
            state: {
                type: nodeType,
                ref: nodeId
            },
            links: [
                {
                    node: "",
                    trigger: ""
                }
            ]
        };
        
        return value;
    }

    loadData(data:GraphData) {

        let nodesData:{[key:string]:any} = data.nodes;
        let nodeIds:string[] = Object.keys(nodesData);
        let nodes:GraphNode[] = [];
        
        // à partir de l'écriture abrégée
        
        

        // on crée d'abord les objets node
        nodeIds.forEach((nodeId:string) => {

            let state:IDisplayable;

            if (nodesData[nodeId].state) {
                let stateData:StateData = nodesData[nodeId].state;

                if (!stateData.type || stateData.type === "sprite") {
                    state = this.scene.getSprite(stateData.ref);
                } else if (stateData.type === "state") {
                    // states à faire
                }
            } else if (typeof nodesData[nodeId] === "string") {
                
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