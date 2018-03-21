import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {GraphLinkDefinition} from "./graph-link-definition.class";
import {ExtendedSpritesGroup} from "../display/extended-sprites-group.class";
import {GameUnitObject} from "../global-objects/game-unit-object.class";
import {GraphNode} from "../graphs/graph-node.class";
import {GraphLink} from "../graphs/graph-link.class";
import {Graph} from "../graphs/graph.class";

export class GraphNodeDefinition {

    stateType: string;
    stateId: string;
    links: GraphLinkDefinition[] = [];

    constructor(
        definition: ResultUnit
    ) {
        let stateDefinition: ResultUnit = definition.children[0];

        if (stateDefinition.type === "typed") {
            this.stateType = stateDefinition.results["type"];
            this.stateId = stateDefinition.results["value"];
        } else if (stateDefinition.type === "free") {
            this.stateType = stateDefinition.results["value"];
        }

        for (let i = 1; i < definition.children.length; i++) {
            if (definition.children[i].type === "graphLink") {
                this.links.push(new GraphLinkDefinition(definition.children[i]));
            }
        }
    }

    create (group: ExtendedSpritesGroup): GraphNode {
        return new GraphNode(group.getState(this.stateId));
    }
}