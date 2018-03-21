import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {Graph} from "../graphs/graph.class";
import {GraphLink} from "../graphs/graph-link.class";
import {GameUnitObject} from "../global-objects/game-unit-object.class";

export class GraphLinkDefinition {

    triggerId: string;
    destNodeId: string;

    constructor(
        definition: ResultUnit
    ) {
        this.triggerId = definition.results["triggerId"];
        this.destNodeId = definition.results["destNode"];
    }

    create(graph: Graph, scope: GameUnitObject): GraphLink {
        return new GraphLink(graph.getNode(this.destNodeId), scope.getTrigger(this.triggerId));
    }
}