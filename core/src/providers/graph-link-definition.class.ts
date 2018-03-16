import {ResultUnit} from "../../../blp-parser/result-unit.class";

export class GraphLinkDefinition {

    triggerId: string;
    destNodeId: string;

    constructor(
        definition: ResultUnit
    ) {
        this.triggerId = definition.results["triggerId"];
        this.destNodeId = definition.results["destNode"];
    }
}