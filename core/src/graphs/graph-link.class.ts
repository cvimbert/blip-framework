/**
 * Created by Christophe on 14/02/2017.
 */
import {Dispatcher} from "../common/dispatcher.class";
import {GraphNode} from "./graph-node.class";
import {ITrigger} from "../interfaces/ITrigger.interface";
import {BaseTrigger} from "../triggers/base-trigger.class";
import {EventListener} from "../common/event-listener.class";
import {Events} from "../common/events.class";
import {Condition} from "../gamelogic/condition.class";
import {GameUnitObject} from "../global-objects/game-unit-object.class";
import {ConditionDef} from "../definitions/group-state-definition.class";

export class GraphLink extends Dispatcher {

    triggerListener:EventListener;

    constructor(
        public destNode:GraphNode,
        public trigger:BaseTrigger,
        private context: GameUnitObject,
        public condition: ConditionDef = null
    ) {
        super();
    }

    enableTrigger(callback:Function) {
        this.trigger.enable();

        if (this.triggerListener) {
            this.trigger.deleteListener(this.triggerListener);
        }

        this.triggerListener = this.trigger.listen(Events.TRIGGER_ACTION, () => {

            if (this.condition.conditionId) {

                let condition: Condition = this.context.getCondition(this.condition.conditionId);

                if (condition.eval() === !this.condition.negated) {
                    callback(this.destNode)
                }
            } else {
                callback(this.destNode)
            }
        });
    }

    disableTrigger() {
        this.trigger.disable();
        this.trigger.deleteListener(this.triggerListener);
    }
}