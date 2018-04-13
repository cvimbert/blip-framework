import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {GraphNodeDefinition} from "./graph-node-definition.class";
import {Graph} from "../graphs/graph.class";
import {GraphNode} from "../graphs/graph-node.class";
import {ExtendedSpritesGroup} from "../display/extended-sprites-group.class";
import {GameUnitObject} from "../global-objects/game-unit-object.class";
import {GraphLinkDefinition} from "./graph-link-definition.class";

export class GraphDefinition {

    nodeDefinitions: {[key: string]: GraphNodeDefinition} = {};

    constructor(
        definition: ResultUnit
    ) {
        definition.getResult("typedObject@type=node/simplePropsGroup").forEach((definition: ResultUnit) => {
            this.nodeDefinitions[definition.results["groupName"]] = new GraphNodeDefinition(definition);
        });
    }

    create(container: GameUnitObject, scope: GameUnitObject): Graph {

        let nodes: {[key: string]: GraphNode} = {};

        for (let id in this.nodeDefinitions) {
            nodes[id] = this.nodeDefinitions[id].create(container);
            nodes[id].id = id;
        }

        let graph: Graph = new Graph(nodes);

        for (let id in this.nodeDefinitions) {
            this.nodeDefinitions[id].links.forEach((link: GraphLinkDefinition) => {
                nodes[id].addLink(link.create(graph, scope));
            });
        }

        return graph;
    }
}