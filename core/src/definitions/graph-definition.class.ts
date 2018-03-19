import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {GraphNodeDefinition} from "./graph-node-definition.class";
import {Graph} from "../graphs/graph.class";
import {GraphNode} from "../graphs/graph-node.class";
import {ExtendedSpritesGroup} from "../display/extended-sprites-group.class";
import {GameUnitObject} from "../global-objects/game-unit-object.class";

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

        let nodes: GraphNode[] = [];

        for (let id in this.nodes) {
            //nodes.push(this.nodes.create());
        }

        return new Graph(nodes);
    }
}