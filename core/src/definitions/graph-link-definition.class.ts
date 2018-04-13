import {ResultUnit} from "../../../blp-parser/result-unit.class";
import {Graph} from "../graphs/graph.class";
import {GraphLink} from "../graphs/graph-link.class";
import {GameUnitObject} from "../global-objects/game-unit-object.class";
import {BaseTrigger} from "../triggers/base-trigger.class";
import {ConditionDef} from "./group-state-definition.class";

export class GraphLinkDefinition {

    triggerId: string;
    destNodeId: string;
    condition: ConditionDef;

    constructor(
        definition: ResultUnit
    ) {
        this.triggerId = definition.results["triggerId"];
        this.destNodeId = definition.results["destNode"];

        this.condition = {
            conditionId: definition.results["conditionId"],
            negated: definition.results["negation"] === "!"
        };
    }

    create(graph: Graph, scope: GameUnitObject): GraphLink {
        let trg: BaseTrigger = scope.getTrigger(this.triggerId);
        return new GraphLink(graph.getNode(this.destNodeId), trg, scope, this.condition);
    }
}