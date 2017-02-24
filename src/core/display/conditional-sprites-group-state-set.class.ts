/**
 * Created by Christophe on 14/02/2017.
 */
import {EventDispatcher} from "../common/event-dispatcher.class";
import {SpritesGroup} from "./sprites-group.class";
import {IState} from "../interfaces/IDisplayable.interface";
import {ConditionalSpritesGroupState} from "./conditional-sprites-group-state.class";

export class ConditionalSpritesGroupStateSet extends EventDispatcher {

    constructor(
        public group:SpritesGroup,
        public conditionalStates:ConditionalSpritesGroupState[] = [],
        public defaultState:IState
    ) {
        super();
    }

    display() {
        for (let conditionalState of this.conditionalStates) {
            if (conditionalState.condition.eval()) {
                conditionalState.state.display();
                return;
            }
        }

        this.defaultState.display();
    }

    update() {
        this.display();
    }

    hide() {
        this.group.hide();
    }
}