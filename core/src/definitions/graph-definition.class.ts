import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {GraphNodeDefinition} from "./graph-node-definition.class";

export class GraphDefinition {

    nodes: {[key: string]: GraphNodeDefinition} = {};

    constructor(
        definition: ResultUnit
    ) {
        definition.getResult("typedObject@type=node/simplePropsGroup").forEach((definition: ResultUnit) => {
            this.nodes[definition.results["groupName"]] = new GraphNodeDefinition(definition);
        });
    }
}