import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {Graph} from "../graphs/graph.class";
import {GraphLink} from "../graphs/graph-link.class";

export class GraphLinkDefinition {

    triggerId: string;
    destNodeId: string;

    constructor(
        definition: ResultUnit
    ) {
        this.triggerId = definition.results["triggerId"];
        this.destNodeId = definition.results["destNode"];
    }

    create(graph: Graph): GraphLink {

        //return new GraphLink();

        return;
    }
}