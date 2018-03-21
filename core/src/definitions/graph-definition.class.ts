import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {GraphNodeDefinition} from "./graph-node-definition.class";
import {Graph} from "../graphs/graph.class";
import {GraphNode} from "../graphs/graph-node.class";
import {ExtendedSpritesGroup} from "../display/extended-sprites-group.class";
import {GameUnitObject} from "../global-objects/game-unit-object.class";
import {GraphLinkDefinition} from "./graph-link-definition.class";

export class GraphDefinition {

    nodes: {[key: string]: GraphNodeDefinition} = {};

    constructor(
        definition: ResultUnit
    ) {
        definition.getResult("typedObject@type=node/simplePropsGroup").forEach((definition: ResultUnit) => {
            this.nodes[definition.results["groupName"]] = new GraphNodeDefinition(definition);
        });
    }

    create(group: ExtendedSpritesGroup, scope: GameUnitObject): Graph {

        let nodes: {[key: string]: GraphNode} = {};

        for (let id in this.nodes) {
            nodes[id] = this.nodes[id].create(group);
        }

        let graph: Graph = new Graph(nodes);

        for (let id in this.nodes) {
            this.nodes[id].links.forEach((link: GraphLinkDefinition) => {
                nodes[id].addLink(link.create(graph, scope));
            });
        }

        return graph;
    }
}