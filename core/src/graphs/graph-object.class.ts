/**
 * Created by Christophe on 11/01/2018.
 */
import {GraphData} from "./interfaces/graph-data.interface";
import {TriggersObject} from "../triggers/triggers-object.class";
import {GameObject} from "../display/game-object.class";
import {GraphNode} from "./graph-node.class";
import {NodeData} from "./interfaces/graph-data.interface";

export class GraphObject {

    private _nodesDictionary:{[key:string]:GraphNode} = {};

    constructor(
        data:GraphData,
        public triggers:TriggersObject,
        public scene:GameObject
    ) {
        this.loadData(data);
    }

    loadData(data:GraphData) {

        let nodes:{[key:string]:NodeData} = data.nodes;
        let nodeIds:string[] = Object.keys(nodes);

        nodeIds.forEach((nodeId:string) => {
            
        });
    }
}