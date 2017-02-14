/**
 * Created by Christophe on 14/02/2017.
 */
import {EventDispatcher} from "../common/event-dispatcher.class";
import {ICondition} from "../interfaces/ICondition.interface";
import {IState} from "../interfaces/IState.interface";

export class ConditionalSpritesGroupState extends EventDispatcher {

    constructor(
        public state:IState,
        public condition:ICondition
    ) {
        super();
    }

}